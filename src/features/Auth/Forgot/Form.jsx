import React from 'react';
import { Button, Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { forgotAsync } from 'features/Auth/authSlice.js';
import { unwrapResult } from '@reduxjs/toolkit';
import 'features/Auth/styles.scss';
import { useDispatch } from 'react-redux';

const FormLogin = () => {
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const resultAction = await dispatch(forgotAsync(values));
    const data = unwrapResult(resultAction);
  };

  const onFinishFailed = (errorInfo) => {
  };
  return (
    <div className="authForm__form">
      <div className="authForm__form__title">QUÊN MẬT KHẨU</div>
      <Form
        className="authForm__form__root"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Nhập địa chỉ email:"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Yêu cầu nhập Email của bạn',
            },
          ]}>
          <Input
            placeholder="Email hoặc số điện thoại"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            style={{
              width: '100%',
              height: '100%',
              background: '#2a2a86',
              borderRadius: 7,
              padding: '10px 5px',
            }}
            type="primary"
            htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
