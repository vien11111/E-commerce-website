import { unwrapResult } from '@reduxjs/toolkit';
import { Alert, Button, Modal, Spin, Table, Tag } from 'antd';
import { BASE_URL } from 'apis/axiosClient';
import { PROFILE } from 'config';
import dayjs from 'dayjs';
import { checkoutAsync } from 'features/checkoutSlice';
import ProfileLayout from 'features/Profile/index';
import { getOrderAsync } from 'features/Profile/profileSlice';
import { get } from 'lodash';
import qs from 'query-string';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { formatCurrency } from 'utils/currency';

const OrderPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const params = {
          populate: 'userId,orderItemId',
          userId: get(
            JSON.parse(localStorage.getItem(PROFILE), '{}'),
            'id',
            ''
          ),
          limit: 100
        };
        const getOrderAction = await dispatch(getOrderAsync(params));
        const { results } = unwrapResult(getOrderAction);
        setOrderList(results);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const onCheckout = async (orderItemId) => {
    const payload = {
      orderItemId,
      vnp_ReturnUrl: BASE_URL[process.env.REACT_APP_MODE] + '/checkout',
      vpn_success: window.location.origin + '/order?status=99',
      vpn_failed: window.location.origin + '/order?status=00',
    };
    const checkoutAction = await dispatch(checkoutAsync(payload));
    const { url } = unwrapResult(checkoutAction);
    window.open(url, '_blank');
  };

  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <div>DH-{id.split(' ').reverse().join(' ').substring(1, 6)}</div>
      ),
    },
    {
      title: 'Ngày mua',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (orderDate) => <div>{dayjs(orderDate).format('DD/MM/YYYY')}</div>,
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'orderItemId',
      key: 'orderItemId.discount',
      render: (orderItemId) => {
        return <>{get(orderItemId, 'product', []).length}</>;
      },
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'orderItemId',
      key: 'orderItemId.id',
      render: (orderItemId) => (
        <div>{formatCurrency(orderItemId.unitPrice, 'vnd')}</div>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        return (
          <>
            {status ? (
              <Tag color="green">Đã hoàn thành</Tag>
            ) : (
              <Tag color="red">Chưa hoàn thành</Tag>
            )}
          </>
        );
      },
    },
    {
      title: 'Thanh toán',
      dataIndex: 'status',
      key: 'status',
      render: (status, value) => {
        return (
          <Button
            type="primary"
            disabled={status}
            onClick={() => onCheckout(value.orderItemId.id)}>
            Tiến hành thanh toán
          </Button>
        );
      },
    },
  ];

  const param = useLocation();
  const history = useHistory();
  const { status, type = 'success' } = qs.parse(param.search);

  const onCancel = () => {
    history.replace({
      pathname: '/order',
      search: '',
      state: { isActive: true },
    });
  };
  return (
    <ProfileLayout>
      <Modal
        visible={status === '00' || status === '99'}
        footer={false}
        onCancel={onCancel}>
        <Alert
          message={`Thánh toán đơn hàng ${
            status === '99' ? 'thành công' : 'thất bại'
          }`}
          type={status === '99' ? 'success' : 'warning'}
        />
      </Modal>

      <div className="profile__title">Đơn hàng của tôi</div>
      {isLoading ? (
        <Spin />
      ) : (
        <Table columns={columns} dataSource={orderList} />
      )}
    </ProfileLayout>
  );
};

export default OrderPage;
