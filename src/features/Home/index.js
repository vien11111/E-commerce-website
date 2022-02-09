import React from 'react';

import Slide from 'components/Slide';
// import Menumini from 'components/Menumini'

import { Col, Layout, Row } from 'antd';
import AppPolicy from 'components/HomePolicy';
import AppCountDown from 'components/AppCountDown';
import { AppImage } from 'components/AppImage';
import { AppButton } from 'components/AppButton';
import Banner from 'assets/img/banner01.jpeg';
import BgDot from 'features/Home/components/BgDot';
import MaleFashion from 'features/Home/Sections/MaleFashion';
import FeMaleFashion from 'features/Home/Sections/FeMaleFashion';
import KitFashion from 'features/Home/Sections/KitFashion';
import StoreFashion from 'features/Home/Sections/StoreFashion';

import TopProduct from 'components/TopProduct';

const { Content } = Layout;

const HomePage = () => {
  return (
    <>
      <Content>
        <Slide />
        <div className="container">
          <AppPolicy />
          <Row
            gutter={24}
            align={'middle'}
            style={{ padding: '20px 0', position: 'relative' }}>
            <Col lg={8} xs={24}>
              <h3>THỜI GIAN CÒN LẠI</h3>
              <AppCountDown />
              <div style={{ paddingBottom: 30 }}>
                <AppButton isDivider>Xem Thêm</AppButton>
              </div>
            </Col>
            <BgDot />

            <Col lg={16} xs={24}>
              <AppImage src={Banner} />
            </Col>
          </Row>

          <TopProduct />

          <MaleFashion />

          <FeMaleFashion />

          {/* <KitFashion /> */}
        </div>
        <StoreFashion />
      </Content>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
