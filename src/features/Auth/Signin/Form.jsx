import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Form, Input } from 'antd';
import { ACCESS_TOKEN, PROFILE, REFRESH_TOKEN } from 'config';
import 'features/Auth/styles.scss';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginAsync } from '../authSlice';

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { logging } = useSelector((state) => state.auth);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    try {
      const resultAction = await dispatch(loginAsync(values));
      const data = unwrapResult(resultAction);
      Promise.resolve()
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

          toast.success('Đăng nhập thành công !', {
            autoClose: 2000,
            theme: 'colored',
          });
        })
        .then(() => {
          history.push('/order');
        });
    } catch (e) {
      toast.error('Đăng nhập thất bại vui lòng thử lại!', {
        autoClose: 2000,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="authForm__form">
      <div className="authForm__form__title">ĐĂNG NHẬP</div>
      <div className="authForm__form__description">
        Nếu bạn chưa có tài khoản, đăng kí <Link to="/signup">tại đây</Link>
      </div>
      <Form
        className="authForm__form__root"
        name="basic"
        layout="vertical"
        initialValues={{
          email: '',
          password: '',
        }}
        onFinish={onFinish}
        autoComplete="off">
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
          rules={[{ required: true, message: 'Yêu cầu nhập mật khẩu' }]}>
          <Input.Password
            placeholder="Password"
            style={{
              padding: '7px 15px',
            }}
          />
        </Form.Item>

        <NavLink to="/forgot" className="authForm__form__forgot">
          Quên Mật Khẩu
        </NavLink>
        <Form.Item wrapperCol={{ span: 24 }} shouldUpdate>
          {() => (
            <Button
              style={{
                width: '100%',
                height: '100%',
                background: '#2a2a86',
                borderRadius: 7,
                padding: '10px 5px',
              }}
              type="primary"
              htmlType="submit"
              disabled={logging}>
              {logging ? '...' : 'Đăng Nhập'}
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
