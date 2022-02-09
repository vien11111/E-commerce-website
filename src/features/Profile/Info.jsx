import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { profileApi } from 'apis/profile';
import ProfileLayout from 'features/Profile/index';
import moment from 'moment';
import React, { Component } from 'react';
import { updateProfile } from 'features/Profile/profileSlice';
const { Option } = Select;
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { get, isEmpty } from 'lodash';
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      dob: '',
      address: '',
    };
  }
  componentDidMount = () => {
    if (JSON.parse(localStorage.PROFILE) !== null) {
      const { address, dayOfBirth, email, userName } = JSON.parse(
        localStorage.PROFILE
      );
      this.setState({
        userName: userName,
        address: address,
        email: email,
        dob: moment(dayOfBirth).format('DD/MM/yyyy'),
      });
    }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDateChange = (event, source) => {
    this.setState({
      dob: event,
    });
  };

  handleSelect = (value, source) => {
    this.setState({
      [source]: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault;
    const profileFromStorage = localStorage.getItem('PROFILE') || '{}';
    const _data = JSON.parse(profileFromStorage);

    if (isEmpty(_data)) {
      toast.error('Có lỗi xảy ra', {
        autoClose: 2000,
        theme: 'colored',
      });
      localStorage.clear();
      this.props.history.push('/');
    } else {
      const updateAction = await updateProfile({
        id: get(data, 'id', null),
        payload: {
          ..._data,
          ...this.state,
          dayOfBirth: this.state.dob,
        },
      });

      const data = unwrapResult(updateAction);
    }
  };

  render() {
    const { userName, address, dob, email, city, district, far } = this.state;
    return (
      <ProfileLayout>
        <div className="profile__title">Hồ sơ của tôi</div>
        <div className="profile__form">
          <Form
            className="authForm__form__root"
            name="basic"
            initialValues={{ remember: true, ...this.state }}
            onFinish={this.handleSubmit}
            autoComplete="off">
            <Row gutter={24} align="middle">
              {/* <Col span={3}>
                <div>Tài khoản</div>
              </Col>
              <Col span={8}>
                <Form.Item
                  wrapperCol={{}}
                  rules={[{ required: true, message: 'Họ tên là bắt buộc' }]}>
                  <Input
                    name="userName"
                    disabled
                    style={{
                      padding: '7px 15px',
                    }}
                    onChange={this.handleChange}
                  />
                </Form.Item>
              </Col> */}
            </Row>

            <Row gutter={24} align="middle">
              <Col span={3}>
                <div>Email</div>
              </Col>
              <Col span={8}>
                <Form.Item
                  rules={[{ required: true, message: 'Bạn cần nhập email' }]}>
                  <Input
                    disabled
                    placeholder="truongpdpd03335@fpt.edu.vn"
                    style={{
                      padding: '7px 15px',
                    }}
                    name="email"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24} align="middle">
              <Col span={3}>
                <div>Ngày Sinh</div>
              </Col>
              <Col span={8}>
                <Form.Item>
                  <DatePicker
                    placeholder={'dd/mm/yyyy'}
                    value={moment(dob, 'DD/MM/yyyy')}
                    style={{
                      width: '100%',
                      padding: '7px 15px',
                    }}
                    onChange={(date) => {
                      this.handleDateChange(date, 'dob');
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24} align="middle">
              <Col span={3}>
                <div>Địa chỉ</div>
              </Col>
              <Col span={8}>
                <Input
                  name="address"
                  placeholder="Nhập số nhà, toà nhà, tên đường...."
                  style={{
                    padding: '7px 15px',
                  }}
                  onChange={this.handleChange}
                  value={address}
                />
              </Col>
            </Row>

            <Form.Item wrapperCol={{ offset: 3, span: 3 }}>
              <Button
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#2a2a86',
                  borderRadius: 7,
                  padding: '10px 5px',
                  marginTop: '10px',
                }}
                type="primary"
                htmlType="submit">
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </ProfileLayout>
    );
  }
}

export default Info;
