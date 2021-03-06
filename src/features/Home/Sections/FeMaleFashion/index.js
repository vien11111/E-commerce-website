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
      <Heading>TH???I TRANG N???</Heading>
      <i>
        Passina Woman Fashion mang l???i s??? h??a h???p v??? c?? t??nh, ??em l???i c???m gi??c
        tho???i m??i t??? b??n trong v?? t?? tin ??? b??n ngo??i v???i c??c s???n ph???m th???i trang
        qu???c d??n nh?? ??o polo, ??o s?? mi, qu???n ??u, qu???n jean, v??y v?? ph??? ki???n.
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
            <Heading>S???N PH???M HOT</Heading>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                {values(productListData).length > 0 ? (
                  <SlideProduct data={values(productListData)} />
                ) : (
                  <h3> S???n ph???m tr???ng trong danh m???c</h3>
                )}
              </>
            )}
            <div style={{ paddingTop: 10 }}>
              <AppButton isDivider>Xem th??m</AppButton>
            </div>
          </div>
        </Row>
      </div>

      <div className="female-feedback">
        <Heading isLeft>
          POLO Passina ??? M???C M???I NG??Y, THO???I M??I M???I NG??Y
        </Heading>
        <i>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "Tho???i m??i, tr??? trung, kh???e kho???n, m???c ????u c??ng ?????p" l?? nh???ng ??i???u
          Passina Everyday Wear ??em ?????n cho nh???ng kh??ch h??ng y??u qu?? c???a m??nh
          trong xu??n
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          h?? 2021 n??y. B??? sung v??o t??? ?????: "M???c m???i ng??y, tho???i m??i m???i ng??y???
          c??ng ??o polo pima, polo m???t chim, h?? n??m nay, Passina cho ra m???t th??m
          Polo cafe ??? D??ng ??o ph??ng cao c???p v???i ch???t li???u v???i s???i cafe ?????c quy???n
          c???a Passina t???i Vi???t Nam. B??? 3 h???a h???n s??? l?? nh???ng items qu???c d??n ?????ng
          h??nh c??ng s??? t??? tin, tho???i m??i cho ng?????i m???c. Xem v?? c??ng Passina tr???i
          nghi???m ngay nh??!
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
