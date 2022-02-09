import React from 'react';

import { Col, Row } from 'antd';

import { NavLink } from 'react-router-dom';

import logo from 'assets/img/logo.png';
import iconUser from 'assets/img/icon_user.png';
import bill from 'assets/img/donhang.png';
import search from 'assets/img/tracuu.png';
import address from 'assets/img/address.png';

import './styles.scss';

const menus = [
  {
    icon: iconUser,
    label: 'Thông tin cá nhân',
    path: '/info',
  },
  {
    icon: bill,
    label: 'Đơn hàng',
    path: '/order',
  },
  {
    icon: search,
    label: 'Tra cứu đơn hàng',
    path: '/order/search',
  },
  {
    icon: address,
    label: 'Cập nhật địa chỉ',
    path: '/profile/edit',
  },
];

const AppSideBar = () => {
  return (
    <div className="sidebar">
      <Row align="middle">
        <Col>
          <div className="sidebar__img">
            <img src={logo} alt="" />
          </div>
        </Col>
      </Row>

      {menus.map((menu, idx) => (
        <Row align="middle" key={idx} className="sidebar__menu">
          <Col>
            <div className="sidebar__menu__icon">
              <img src={menu.icon} alt="" />
            </div>
          </Col>
          <Col>
            <NavLink to={menu.path} className="sidebar__menu__label">
              {menu.label}
            </NavLink>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default AppSideBar;
