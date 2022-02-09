import React, { useState } from 'react';
import Heading from 'components/Heading';
import TagName from 'components/AppTag';
import { Col, Row } from 'antd';
import SlideProduct from 'components/SlideProduct';

import SpecialFemale from 'assets/img/special-female.jpeg';
import jodyPolo from 'assets/img/polo.png';
import poloHuman from 'assets/img/polo1.jpeg';
import poloKit from 'assets/img/poloKids.png';

import './styles.scss';
import { AppButton } from 'components/AppButton';
import { AppImage } from 'components/AppImage';

const FeMaleFashion = () => {
  const [currentTag, setCurrentTag] = useState(0);

  const onHandleTagName = (tagId) => {
    setCurrentTag(tagId);
  };
  return (
    <section className="pt-50">
      <Heading>THỜI TRANG Nữ</Heading>
      <i>
        Passina Women Fashion mang lại sự hòa hợp về cá tính, đem lại cảm giác
        thoải mái từ bên trong và tụ tin ở bên ngoài với các sản phẩm thời trang
        quốc dân như áo polo, áo thun, áo sơ mi, quần âu, quần jean và phụ kiện
        nữ.
      </i>

      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {[
            { tagName: 'Áo Nữ' },
            { tagName: 'Quần Nữ' },
            { tagName: 'Váy Nữ' },
            { tagName: 'Đồ Bộ Nữ' },
            { tagName: 'Phụ kiện Nữ' },
          ].map((tag, idx) => (
            <TagName
              key={idx}
              isActive={currentTag === idx}
              onClick={() => onHandleTagName(idx)}>
              {tag.tagName}
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
            <SlideProduct />

            <div style={{ paddingTop: 10 }}>
              <AppButton isDivider>Xem thêm</AppButton>
            </div>
          </div>
        </Row>
      </div>

      <div className="female-feedback">
        <Heading isLeft>
          POLO PASSINA – MẶC MỖI NGÀY, THOẢI MÁI MỖI NGÀY
        </Heading>
        <i>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "Thoải mái, trẻ trung, khỏe khoắn, mặc đâu cũng đẹp" là những điều
          Passina Everyday Wear đem đến cho những khách hàng yêu quý của mình
          trong mùa xuân
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
