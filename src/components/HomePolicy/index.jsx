import React from 'react';
import { Col, Row } from 'antd';
import './styles.scss';

import ShipDelivery from 'assets/img/free-delivery.png';
import WalletIcon from 'assets/img/wallet.png';
import DiamondIcon from 'assets/img/dimond-vip.png';
import SewIcon from 'assets/img/sew.png';

const policies = [
  {
    label: 'Miễn phí giao hàng',
    description: 'Miễn phí ship với ',
    press: 'đơn hàng > 498K',
    icon: ShipDelivery,
  },
  {
    label: 'Thanh toán COD',
    description: 'Thanh toán khi \n',
    press: 'nhận hàng (COD)',
    icon: WalletIcon,
  },
  {
    label: 'Khách hàng VIP',
    description: 'Ưu đãi dành cho\n',
    press: 'khách hàng VIP',
    icon: DiamondIcon,
  },
  {
    label: 'Hỗ trợ bảo hành\n',
    description: 'PASSINA hỗ trợ \n',
    press: 'ĐỔI - SỬA',
    icon: SewIcon,
  },
];
const AppPolicy = () => {
  return (
    <Row gutter={24} className="policy">
      {policies.map(({ label, description, icon,press }) => (
        <Col
          key={label}
          lg={{ span: 6 }}
          xs={{ span: 12 }}
          className="policy__col">
          <Row gutter={24} align={'center'} justify={'center'}>
            <Col span={4}>
              <div className="policy__image">
                <img src={icon} alt={label} />
              </div>
            </Col>
            <Col>
              <div className="policy__label">{label}</div>
              <div className="policy__description">
                  <span className="policy__description--main" >
                    {description}
                  </span>
                  <span className="policy__description--press">
                    {press}
                  </span>
                
              </div>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default AppPolicy;
