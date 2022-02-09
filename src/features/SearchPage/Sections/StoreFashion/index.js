import React from 'react';
import Heading from 'components/Heading';
import { Col, Row } from 'antd';
import Store1 from 'assets/img/store1.jpeg';
import Store2 from 'assets/img/store2.jpeg';
import Store3 from 'assets/img/store3.jpeg';
import Store4 from 'assets/img/store4.jpeg';
import { AppImage } from 'components/AppImage';

const StoreFashion = () => {
  return (
    <section className="pt-50">
      <Heading>#LOVEPASSINA</Heading>
      <span
        style={{
          textAlign: 'center',
          display: 'block',
          width: '100%',
          padding: '7px 0',
        }}>
        Cùng Passina lưu giữ những kỉ niệm đẹp nhất!!
      </span>

      <Row gutter={24}>
        <Col xs={12} lg={6}>
          <AppImage src={Store1} />
        </Col>
        <Col xs={12} lg={6}>
          <AppImage src={Store2} />
        </Col>
        <Col xs={12} lg={6}>
          <AppImage src={Store3} />
        </Col>
        <Col xs={12} lg={6}>
          <AppImage src={Store4} />
        </Col>
      </Row>
    </section>
  );
};

export default StoreFashion;
