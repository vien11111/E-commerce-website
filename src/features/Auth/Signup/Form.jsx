import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input } from 'antd';
import { ACCESS_TOKEN, PROFILE, REFRESH_TOKEN } from 'config';
import 'features/Auth/styles.scss';
import { get } from 'lodash';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerAsync } from '../authSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = async (values) => {
    const payload = {
      userName: values.userName,
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
      role: 'user',
      address: 'Da Nang city',
      dayOfBirth: new Date().toISOString(),
      gender: 0,
    };

    try {
      const data = await dispatch(registerAsync(payload));
      const _data = unwrapResult(data);
      Promise.resolve()
        .then(toast.success('Đăng ký thành công !'))
        .then(() => {
          localStorage.setItem(
            ACCESS_TOKEN,
            get(data, 'tokens.access.token', '')
          );

          localStorage.setItem(
            REFRESH_TOKEN,
            get(data, 'tokens.refresh.token', '')
          );
          localStorage.setItem(PROFILE, JSON.stringify(get(data, 'user', {})));
        })
        .then(history.push('/info'));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="authForm__form">
      <div className="authForm__form__title">ĐĂNG Ký</div>
      <div className="authForm__form__description">
        Nếu bạn chưa có tài khoản, đăng kí <Link to="/signup">tại đây</Link>
      </div>
      <Form
        className="authForm__form__root"
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <Form.Item
          label="Tên đăng nhập:"
          name="userName"
          rules={[{ required: true, message: 'Yêu cầu nhập tên của bạn' }]}>
          <Input
            placeholder="Tên đăng nhập:"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <Form.Item
          label="Điện thoại:"
          name="phoneNumber"
          rules={[{ required: true, message: 'Yêu cầu nhập Email của bạn' }]}>
          <Input
            placeholder="Điện thoại"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <Form.Item
          label="Email của bạn"
          name="email"
          rules={[{ required: true, message: 'Yêu cầu nhập Email của bạn' }]}>
          <Input
            placeholder="Email"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          dependencies={['password']}
          rules={[
            {
              required: true,
              type: 'regexp',
              pattern: new RegExp(/^[0-9a-fA-F]{24}$/),
              message: 'Mật khẩu phải có ít nhất một kí tự',
            },
            { min: 8, message: 'Mật khẩu phải ít nhất 8 kí tự' },
          ]}>
          <Input.Password
            placeholder="Password"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirm"
          rules={[
            {
              required: true,
              message: 'Yêu cầu nhập mật khẩu!',
            },
            { min: 8, message: 'Mật khẩu phải ít nhất 8 kí tự' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu phải giống nhau'));
              },
            }),
          ]}>
          <Input.Password
            placeholder="Password"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <NavLink to="/signin" className="authForm__form__forgot">
          Đã có tài khoản
        </NavLink>
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
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
