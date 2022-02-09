import { Col, Layout, Pagination, Row, Select, Skeleton } from 'antd';
import { AppCardProduct } from 'components/AppCardProduct';
import AppPolicy from 'components/HomePolicy';
import { useGetProduct } from 'hooks/useGetProduct';
import { get, values } from 'lodash';
import qs from 'query-string';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
const { Content } = Layout;
const { Option } = Select;

const SearchPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const { page, total, isFetchData, productListData } = useGetProduct({
    exact: 'search',
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

  const keyWord = get(qs.parse(location.search), 'productName', '');
  return (
    <>
      <Content>
        {isFetchData ? (
          <Skeleton />
        ) : (
          <div className="container">
            <AppPolicy />

            <Row gutter={24}>
              <Col xs={24} lg={24}>
                <div style={{ paddingBottom: 20 }}>
                  <Row
                    gutter={24}
                    align={'middle'}
                    justify={'space-between'}
                    style={{ paddingBottom: 10 }}>
                    <Col xs={20}>
                      <h3>Kết quả tìm kiếm cho `{keyWord}`</h3>
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
                </div>
                <Row>
                  {values(productListData).map((elm, index) => (
                    <Col key={index} xs={12} lg={8}>
                      <AppCardProduct product={elm} />
                    </Col>
                  ))}
                </Row>

                {values(productListData).length === 0 && (
                  <div>Không có sản phẩm nào</div>
                )}

                {values(productListData).length !== 0 && (
                  <div style={{ paddingTop: 10 }}>
                    <Pagination
                      current={+page}
                      total={total}
                      pageSize={10}
                      onChange={handleChangePage}
                    />
                  </div>
                )}
              </Col>
            </Row>
          </div>
        )}
      </Content>
    </>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
