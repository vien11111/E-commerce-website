import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import {
  Spin,
  Col,
  Divider,
  Dropdown,
  Menu,
  message,
  Row,
  Space,
  Skeleton,
} from 'antd';
import { ACCESS_TOKEN } from 'config';
import { PROFILE } from 'config';
import { isLoggedIn } from 'features/Auth/authSlice';
import { get, keys, values, debounce } from 'lodash';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logo1.png';
import bannertop from '../../assets/img/bannertop.jpeg';
import { formatCurrency } from 'utils/currency';
import { deleteProduct } from 'features/Product/productSlice';
import { getProductAsync } from 'features/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const menuGuest = (
  <Menu>
    <Menu.Item key="1">
      <NavLink to="/signin">Đăng nhập</NavLink>
    </Menu.Item>
    <Menu.Item key="2">
      <NavLink to="/signup">Đăng ký</NavLink>
    </Menu.Item>
  </Menu>
);

export const AppHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogged = Boolean(localStorage.getItem(ACCESS_TOKEN));
  const profile = JSON.parse(localStorage.getItem(PROFILE) || '{}');
  const { isForce } = useSelector((state) => state.product);

  const [currentCart, setCurrentCart] = useState({});

  useEffect(() => {
    setCurrentCart(JSON.parse(localStorage.getItem('cart') || '{}'));
  }, [localStorage, isForce]);

  const handleButtonClick = () => {
    history.push('/signin');
  };

  function handleMenuClick(e) {
    message.info('Click on menu item.');
  }

  const handleLogout = () => {
    Promise.resolve()
      .then(localStorage.clear())
      .then(() => history.push('/'));
  };

  const deleteProductCart = (idProductAdd) => {
    dispatch(
      deleteProduct({
        idProductAdd,
      })
    );
  };

  const totalPrice = useMemo(() => {
    const total = values(currentCart).reduce((acc, cur) => {
      return (
        acc + (cur.price - (cur.price * cur.discount) / 100) * cur.quantity
      );
    }, 0);
    return formatCurrency(total);
  }, [isForce, currentCart]);

  const menuAuth = (
    <Menu>
      <Menu.Item key="2">
        <NavLink to="/info">{get(profile, 'userName', '')}</NavLink>
      </Menu.Item>

      <Menu.Item key="1" onClick={handleLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  const menu1 = (
    <Menu
      onClick={handleMenuClick}
      className="HoverCart"
      style={{ backgroundColor: 'white' }}>
      <div>
        {values(currentCart).map(
          ({ id, price, discount, imageProductId, productName, quantity }) => (
            <div key={id} className="HoverCart_Item">
              <Row className="ListCart">
                <Col xs={4} className="imgCart">
                  <img
                    src={get(imageProductId, 'images[0].path', '')}
                    alt={productName}
                  />
                </Col>
                <Col xs={18} className="Text">
                  <div className="TextCart">
                    <div className="TextCart_Item">
                      <h4>{productName}</h4>
                    </div>
                    <div className="price_cart">
                      <h3>Số lượng: {quantity}</h3>
                      <h3 style={{ marginLeft: '20px' }}>
                        Số tiền:
                        {formatCurrency(
                          (price - (price * discount) / 100) * quantity
                        )}
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="icon" style={{ cursor: 'pointer' }}>
                    <div onClick={() => deleteProductCart(id)}>
                      <i className="far fa-trash-alt"></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )
        )}
      </div>
      <hr />
      <Row className="Price" justify={'end'}>
        <Col className="Text">
          <h3>Thành tiền:</h3>
        </Col>
        <Col className="price_item">
          <h3>{totalPrice}</h3>
        </Col>
      </Row>
      <div className="button__cart">
        <button className="button__cart-item button__cart-item--1" onClick={() => history.push('/cart')}>
          Giỏ hàng
        </button>
        <button
          className="button__cart-item button__cart-item--2"
          onClick={() => history.push('/cart')}>
          Thanh toán
        </button>
      </div>
    </Menu>
  );

  const countCart = useMemo(
    () => keys(JSON.parse(localStorage.getItem('cart') || '{}')).length,
    [isForce]
  );

  const [keySearch, setKeySearch] = useState('');

  const [resultSearchList, setResultSearchList] = useState([]);

  const [isSearching, setIsSearching] = useState(true);

  const getProductByName = async (productName) => {
    try {
      setIsSearching(true);
      const _dataAction = await dispatch(
        getProductAsync({
          productName,
          page: 1,
          limit: 20,
          exact: 'search',
          populate: 'imageProductId',
        })
      );
      const response = unwrapResult(_dataAction);
      setResultSearchList(response);
    } finally {
      setIsSearching(false);
    }
  };
  const handleSearch = debounce((e) => {
    setKeySearch(e.target.value);
    getProductByName(e.target.value);
  }, 400);

  const onSearch = () => {
    const url = `/search?productName=${keySearch}`;
    history.push(url);
  };
  return (
    <div className="wapper-header">
      <img src={bannertop} alt="logo" className=" w-100" />
      <Row className={'top-header container'}>
        <Col span={6} push={18} align={'end'}>
          <p>
            Hotline: <Link> 1800 2086</Link>(Miễn Phí)
          </p>
        </Col>
        <Col span={18} pull={6}>
          <ul>
            <li>
              <Link>Tra cứu đơn hàng</Link>
            </li>
            <li>
              <Link>Tạp chí thời trang</Link>
            </li>
            <li>
              <Link>Liên hệ</Link>
            </li>
            <li className="bgr1">
              <Link>Hệ thống cửa hàng toàn quốc</Link>
            </li>
            <li className="bgr2">
              <Link>Tuyển dụng</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider></Divider>
      <Row className={'bottom-header container'}>
        <Col span={6}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </Col>
        <Col span={12}>
          <div className="header-search">
            <input
              onChange={(event) => {
                event.persist();
                handleSearch(event);
              }}
              className="search"
              type="text"
              placeholder="Tìm kiếm tại đây"
            />
            <button onClick={onSearch}>
              <i className="fas fa-search"></i>
              <label htmlFor="search"></label>
            </button>

            {keySearch && (
              <div className="position-search">
                <div>
                  <>
                    {isSearching ? (
                      <div
                        style={{
                          background: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          padding: 10,
                        }}>
                        <Skeleton />
                      </div>
                    ) : (
                      <>
                        {get(resultSearchList, 'results', []).map(
                          (elm, idx) => {
                            return (
                              <div key={idx}>
                                <div className="result__search">
                                  <div className="result__search-item">
                                    <div className="result__search-image">
                                      <img
                                        src={get(
                                          elm,
                                          'imageProductId.images[0].path',
                                          ''
                                        )}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="result__search-name">
                                      <Link
                                        to={`/product/${elm.id}`}
                                        style={{ color: '#000' }}>
                                        {get(elm, 'productName', '')}
                                      </Link>
                                    </div>
                                    <div className="result__search-price">
                                      {formatCurrency(
                                        elm.price -
                                          elm.price * (elm.discount / 100)
                                      )}
                                      <span style={{ paddingLeft: 5 }}>
                                        {formatCurrency(elm.price)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </>
                    )}
                  </>
                </div>
              </div>
            )}
          </div>
        </Col>
        <Col span={6}>
          <Space>
            <div className="user-header">
              <Dropdown.Button
                onClick={handleButtonClick}
                overlay={isLogged ? menuAuth : menuGuest}
                icon={<UserOutlined />}>
                {isLogged ? get(profile, 'userName', '') : 'Đăng nhập'}
              </Dropdown.Button>
              <div style={{ paddingLeft: 10 }}>
                <Dropdown.Button
                  // onClick={handleButtonClick}
                  overlay={menu1}
                  icon={<ShoppingCartOutlined />}>
                  {countCart} Sản phẩm
                </Dropdown.Button>
              </div>
            </div>
          </Space>
        </Col>
      </Row>
      ,
    </div>
  );
};

AppHeader.propTypes = {};
