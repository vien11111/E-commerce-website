import React from 'react';

import { Col, Row } from 'antd';

import bigLogo from 'assets/img/logo1.png';

import storeImg from 'assets/img/bg_login.jpg';
import './styles.scss';

const AuthLayout = ({ children }) => {
  return (
    <div
      className="authForm"
      style={{
        backgroundImage: `url(${storeImg})`,
      }}>
      
      <div className="container">
        <Row gutter={24} align="middle" justify="space-between">
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            <div className="authForm__logo">
              <img src={bigLogo} alt="big logo" />
            </div>
            <div className="authForm__title">
              <div>
                <div className="authForm__hello">Passina Xin Chào!</div>
                <div>
                  Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy
                  nghĩ và hành động của mình là sứ mệnh, là triết lý, chiến
                  lược... luôn cùng Passina tiến bước!
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 12 }} xs={{ span: 24 }}>
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthLayout;
