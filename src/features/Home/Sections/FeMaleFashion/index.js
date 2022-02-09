import { unwrapResult } from '@reduxjs/toolkit';
import { Col, Row, Skeleton } from 'antd';
import jodyPolo from 'assets/img/polo.png';
import poloHuman from 'assets/img/polo1.jpeg';
import poloKit from 'assets/img/poloKids.png';
import SpecialFemale from 'assets/img/special-female.jpeg';
import { AppButton } from 'components/AppButton';
import { AppImage } from 'components/AppImage';
import TagName from 'components/AppTag';
import Heading from 'components/Heading';
import SlideProduct from 'components/SlideProduct';
import { getProductAsync } from 'features/productSlice';
import { useGetCategory } from 'hooks/useGetCategory';
import { get, keyBy, values } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';



const FeMaleFashion = () => {
  const dispatch = useDispatch();

  const { categoryData } = useGetCategory({ male: 0, limit: 4 });
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState([]);

  const [currentTag, setCurrentTag] = useState(0);

  const [defaultParams, setDefaultParams] = useState({
    populate: 'imageProductId,categoryId,colorId',
    page: 1,
    limit: 10,
    male: 0,
    sortBy: 'price:desc',
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const params = { ...defaultParams };
        const action = await dispatch(getProductAsync(params));
        const { results } = unwrapResult(action);
        setProductListData(keyBy(results, 'id'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [defaultParams, dispatch]);

  useEffect(() => {
    const initialCategory = get(values(categoryData), '[0].id', '');
    setCurrentTag(initialCategory);
  }, [categoryData]);

  const onHandleTagName = (tagId) => {
    setCurrentTag(tagId);
    setDefaultParams((prevState) => ({
      ...prevState,
      categoryId: tagId,
      male: 0,
    }));
  };

  return (
    <section className="pt-50">
      <Heading>THỜI TRANG NỮ</Heading>
      <i>
        Passina Woman Fashion mang lại sự hòa hợp về cá tính, đem lại cảm giác
        thoải mái từ bên trong và tư tin ở bên ngoài với các sản phẩm thời trang
        quốc dân như áo polo, áo sơ mi, quần âu, quần jean, váy và phụ kiện.
      </i>

      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {values(categoryData).map((tag, idx) => (
            <TagName
              key={idx}
              isActive={currentTag === tag.id}
              onClick={() => onHandleTagName(tag.id)}>
              {tag.categoryName}
            </TagName>
          ))}
        </Row>
      </div>
      <div className="female">
        <Row
          gutter={24}
          className="female__wrapper"
          style={{
            backgroundImage: `url(${SpecialFemale})`,
          }}>
          <Col span={8}>{/*<AppImage src={SpecialFemale} />*/}</Col>
          <Col span={16} />
          <div className={'female__content'}>
            <Heading>SẢN PHẨM HOT</Heading>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                {values(productListData).length > 0 ? (
                  <SlideProduct data={values(productListData)} />
                ) : (
                  <h3> Sản phẩm trống trong danh mục</h3>
                )}
              </>
            )}
            <div style={{ paddingTop: 10 }}>
              <AppButton isDivider>Xem thêm</AppButton>
            </div>
          </div>
        </Row>
      </div>

      <div className="female-feedback">
        <Heading isLeft>
          POLO Passina – MẶC MỖI NGÀY, THOẢI MÁI MỖI NGÀY
        </Heading>
        <i>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "Thoải mái, trẻ trung, khỏe khoắn, mặc đâu cũng đẹp" là những điều
          Passina Everyday Wear đem đến cho những khách hàng yêu quý của mình
          trong xuân
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          hè 2021 này. Bổ sung vào tủ đồ: "Mặc mỗi ngày, thoải mái mỗi ngày”
          cùng áo polo pima, polo mắt chim, hè năm nay, Passina cho ra mắt thêm
          Polo cafe – Dòng áo phông cao cấp với chất liệu vải sợi cafe độc quyền
          của Passina tại Việt Nam. Bộ 3 hứa hẹn sẽ là những items quốc dân đồng
          hành cùng sự tự tin, thoải mái cho người mặc. Xem và cùng Passina trải
          nghiệm ngay nhé!
        </i>
      </div>

      <AppImage src={jodyPolo} />

      <Row gutter={24} style={{ paddingTop: 15 }}>
        <Col span={12}>
          <AppImage src={poloHuman} />
        </Col>
        <Col span={12}>
          <AppImage src={poloKit} />
        </Col>
      </Row>
    </section>
  );
};

export default FeMaleFashion;
