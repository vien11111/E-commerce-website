import React from 'react';
import Map from 'components/Map';
import { Row, Col, Form, Input, Button } from 'antd';
import './contact.scss';

const { TextArea } = Input;

const index = () => {
  const API_Key = 'AIzaSyAzN2m5LZgSwqUnnFrQZTPR82NFe4jneOE';
  return (
    <div className="container pt-50">
      <h1>Liên hệ</h1>
      <div className="contact">
        <Row gutter={24}>
          <Col className="gutter-row" span={8}>
            <div className="contact__col">
              <div className="contact__col--icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact__col--info">
                <span>Địa chỉ:</span>
                <p>
                  Công ty CP Thời Trang PASSINA, 137 Nguyễn Thị Thập, TP. Đà
                  Nẵng
                </p>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="contact__col">
              <div className="contact__col--icon">
                <i className="fas fa-question"></i>
              </div>
              <div className="contact__col--info">
                <span>Gửi thắc mắc:</span>
                <p className="hover">chamsockhachhang@passina.vn</p>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="contact__col">
              <div className="contact__col--icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact__col--info">
                <span>Điện thoại:</span>
                <p className="hover">+007 9089 6767</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_Key}&callback=initMap`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    width: '100%',
                    height: `70vh`,
                    margin: `auto`,
                    border: '1px solid #eee',
                  }}
                />
              }
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Col>
          <Col className="gutter-row" span={16}>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label={<span className="label">Họ tên</span>} required>
                    <Input size="large" placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={<span className="label">Email</span>} required>
                    <Input size="large" placeholder="" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label={<span className="label">Nội dung</span>} required>
                <TextArea rows={12} />
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary">Gửi liên hệ</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default index;
