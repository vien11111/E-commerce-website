import React from 'react';

import AppSideBar from 'components/AppSideBar';
import { Row, Col } from 'antd';

import './styles.scss';

const ProfileLayout = ({ children }) => {
  return (
    <div className="container profile">
      <Row gutter={24} justify="space-between">
        <Col xs={24} lg={6}>
          <AppSideBar />
        </Col>
        <Col xs={24} lg={18}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileLayout;
