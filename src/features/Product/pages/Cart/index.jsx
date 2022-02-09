import { unwrapResult } from '@reduxjs/toolkit';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import CartItem from 'components/CartItem';
import { PROFILE } from 'config';
import { hiddenLoading, showLoading } from 'features/loadingSlice';
import { get, keys, values } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatCurrency } from 'utils/currency';
import { createOrderAsync, createOrderItemAsync } from './cartSlice';
import './style.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentCart, setCurrentCart] = useState({});
  const { isForce } = useSelector((state) => state.product);

  useEffect(() => {
    setCurrentCart(JSON.parse(localStorage.getItem('cart') || '{}'));
  }, [isForce]);

  const countCart = useMemo(
    () => keys(JSON.parse(localStorage.getItem('cart') || '{}')).length,
    [isForce]
  );

  const totalPrice = useMemo(() => {
    const total = values(currentCart).reduce((acc, cur) => {
      return (
        acc + (cur.price - (cur.price * cur.discount) / 100) * cur.quantity
      );
    }, 0);
    return total;
  }, [isForce, currentCart]);

  const onFinish = async (_values) => {
    if (keys(currentCart).length > 0) {
      try {
        dispatch(showLoading());
        const payload = {
          unitPrice: totalPrice,
          discount: 5,
          product: values(currentCart).map((item) => ({
            quantity: item.quantity,
            productId: item.id,
          })),
          address: _values.address,
          phoneNumber: _values.phoneNumber,
        };
        const _createOrderItemAction = await dispatch(
          createOrderItemAsync(payload)
        );
        const orderItem = unwrapResult(_createOrderItemAction);
        const _DAY = 259200 * 1000;

        const payloadOrder = {
          status: 0,
          orderItemId: orderItem.id,
          userId: get(JSON.parse(localStorage.getItem(PROFILE) || "{}"), 'id', ''),
          orderDate: Date.now(),
          shippedDate: Math.round(+new Date() + _DAY / 1000),
        };
        const _createOrderAction = await dispatch(createOrderAsync(payloadOrder))
        const _dataOrder = unwrapResult(_createOrderAction);
        toast.success('Đặt hàng thành công', {
          autoClose: 2000,
          theme: 'colored',
        });

        localStorage.removeItem('cart');
        history.push('/order/search');
      } catch (error) {
        toast.error(error.message);
      } finally {
        dispatch(hiddenLoading());
      }
    } else {
      toast.error('Giỏ hàng trống');
    }
  };

  return (
    <div className="cart container">
      <Row>
        <Col xl={{ span: 8, push: 16 }} xs={{ span: 24 }}>
          <div className="cart__info">
            <div className="cart__info__txt">
              <p>Bạn đang có {countCart} sản phẩm trong giỏ hàng</p>
              <Divider style={{ margin: 0 }} />
              <div className="cart__info__txt__price">
                <span>Thành tiền:</span>
                <span
                  style={{
                    float: 'right',
                    color: '#2a2a86',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <Divider style={{ margin: 0 }} />
              <div className="cart__info__txt__content">
                <span>Đơn hàng của bạn được freeship</span>
              </div>
            </div>
          </div>
          <Form
            className="authForm__form__root"
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
              // address: '240 thai thi boi, danang',
              // phoneNumber: '0901989847',
            }}
            onFinish={onFinish}
            autoComplete="off">
            <Form.Item
              label="Địa chỉ nhận hàng"
              name="address"
              rules={[
                { required: true, message: 'Bạn cần nhập địa chỉ nhận hàng' },
              ]}>
              <Input
                style={{
                  padding: '7px 15px',
                }}
              />
            </Form.Item>
            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[{ required: true, message: 'Số điện thoại liên hệ' }]}>
              <Input
                style={{
                  padding: '7px 15px',
                }}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} shouldUpdate>
              {() => (
                <div className="cart__info__btn">
                  <Button
                    style={{
                      backgroundColor: '#2a2a86',
                      color: '#fff',
                      fontSize: 16,
                      marginBottom: 10,
                      height: 70,
                      fontWeight: 500,
                      borderRadius: 4,
                      border: 'none',
                    }}
                    htmlType="submit"
                    block>
                    Tiến hành đặt hàng
                  </Button>
                  <Button
                    style={{
                      borderRadius: 4,
                      color: '#2a2a86',
                      fontSize: 16,
                      height: 70,
                      marginBottom: 10,
                      border: 'none',
                      fontWeight: 500,
                    }}
                    block>
                    Tiếp tục mua hàng
                  </Button>
                </div>
              )}
            </Form.Item>
          </Form>
        </Col>

        <Col
          xl={{ span: 16, pull: 8 }}
          xs={{ span: 24, flex: 'start' }}
          // style={{paddingRight: 10}}
        >
          <div className="cart__list" style={{ padding: 20 }}>
            <CartItem cartList={currentCart} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
