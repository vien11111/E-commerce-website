import { Col, Layout, Pagination, Row, Select, Skeleton } from 'antd';
import { AppButton } from 'components/AppButton';
import { AppCardProduct } from 'components/AppCardProduct';
import AppCollapse from 'components/AppCollapse';
import AppPolicy from 'components/HomePolicy';
import Slide from 'components/Slide';
import TopProduct from 'components/TopProduct';
import { useGetCategory } from 'hooks/useGetCategory';
import { useGetProduct } from 'hooks/useGetProduct';
import { values } from 'lodash';
import qs from 'query-string';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
const { Content } = Layout;
const { Option } = Select;

const MalePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const { page, total, isFetchData, productListData } = useGetProduct({
    male: 1,
  });

  const { isLoading: isFetchCategory, categoryData } = useGetCategory({
    male: 1,
    limit: 100,
  });

  const handleChangePage = (page) => {
    const query = qs.parse(location.search);
    const newParams = qs.stringify({ ...query, page });
    history.replace({ pathname: location.pathname, search: newParams });
  };

  const handleSort = (sortQuery) => {
    const parseStringSort = qs.parse(sortQuery);
    const currentQuery = qs.parse(location.search);
    const params = qs.stringify({ ...parseStringSort, ...currentQuery });
    history.replace({ pathname: location.pathname, search: params });
  };

  const onFilterByCategory = (idCategory) => {
    const query = qs.parse(location.search);
    const newParams = qs.stringify({
      ...query,
      categoryId: idCategory,
      page: 1,
    });
    history.replace({ pathname: location.pathname, search: newParams });
  };

  const onFilterByPrice = (price) => {
    const [min, max] = price;
    const filterByPrice = {
      minPrice: +min,
      maxPrice: +max,
      price: 0,
      exact: 'and',
    };
    const query = qs.parse(location.search);
    const newParams = qs.stringify({
      ...query,
      ...filterByPrice,
      male: 1,
      page: 1,
    });
    history.replace({ pathname: location.pathname, search: newParams });
  };

  const clearFilter = () => {
    history.replace({ pathname: location.pathname, search: '' });
  };

  return (
    <>
      <Content>
        <Slide male={1} />
        {isFetchData ? (
          <Skeleton />
        ) : (
          <div className="container">
            <AppPolicy />

            <TopProduct title="SẢN PHẨM MỚI RA MẮT" male={1} />
            {/* <TopCategory /> */}

            <Row gutter={24}>
              <Col xs={0} lg={6}>
                {isFetchCategory ? (
                  <Skeleton />
                ) : (
                  <>
                    <AppCollapse
                      categoryList={categoryData}
                      onFilterByCategory={onFilterByCategory}
                      onFilterByPrice={onFilterByPrice}
                    />
                    <div style={{ paddingTop: 10 }}>
                      <AppButton isDivider onClick={clearFilter}>
                        Xoá Bộ Lộc
                      </AppButton>
                    </div>
                  </>
                )}
              </Col>
              <Col xs={24} lg={18}>
                <div style={{ paddingBottom: 20 }}>
                  <Row
                    gutter={24}
                    align={'middle'}
                    justify={'space-between'}
                    style={{ paddingBottom: 10 }}>
                    <Col xs={20}>
                      <h3
                        style={{
                          display: 'inline',
                        }}>
                        Nam
                      </h3>
                      ( {values(productListData).length} Sản phẩm)
                    </Col>
                    <Col xs={4}>
                      <Select
                        style={{ width: 200 }}
                        defaultValue="sortBy=price:desc"
                        onChange={handleSort}>
                        {[
                          {
                            label: 'Giá từ cao',
                            value: 'sortBy=price:desc',
                          },
                          {
                            label: 'Giá từ thấp',
                            value: 'sortBy=price:asc',
                          },
                          // {
                          //   label: 'Giới tính Nữ',
                          //   value: 'male=0',
                          // },
                          // {
                          //   label: 'Giới tính Nam',
                          //   value: 'male=1',
                          // },
                        ].map(({ label, value }, idx) => (
                          <Option key={idx} value={value}>
                            {label}
                          </Option>
                        ))}
                      </Select>
                    </Col>
                  </Row>

                  <div>
                    <b className="cl-blue">Thời trang nam tại Passina</b>
                    với mong muốn đem lại sự cân bằng giữa phong cách bên ngoài
                    và sự thoải mái bên trong, toát lên sự gần gũi, trẻ trung
                    cho quý khách hàng với các dòng sản phẩm như{' '}
                    <b className="cl-blue">áo polo</b>, áo phông,{' '}
                    <b className="cl-blue">áo sơ mi</b>, quần Jean.
                  </div>
                </div>
                <Row>
                  {values(productListData).map((elm, index) => (
                    <Col key={index} xs={12} lg={8}>
                      <AppCardProduct product={elm} />
                    </Col>
                  ))}
                </Row>

                <div style={{ paddingTop: 10 }}>
                  <Pagination
                    current={+page}
                    total={total}
                    pageSize={10}
                    onChange={handleChangePage}
                  />
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Content>
    </>
  );
};

MalePage.propTypes = {};

export default MalePage;
