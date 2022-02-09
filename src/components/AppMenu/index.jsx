// import Search from 'antd/lib/transfer/search'
import { Row, Space } from 'antd';
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/img/logo1.png';

const menuList = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Nữ', path: '/female' },
  { label: 'Nam', path: '/male' },
  { label: 'Trẻ Em', path: '/child' },
  { label: 'PASSINA POLO', path: '/polo' },
  { label: 'Về Chúng Tôi', path: '/about' },
  { label: 'Liên hệ', path: '/contact' },
];

export const AppMenu = () => {
  const [isActive, setIsActive] = React.useState(false);

  const history = useHistory();
  
  function handleClick() {
    setIsActive(!isActive);
    const navbar = document.querySelector('.root');
    return navbar.classList.toggle('active');
  }

  return (
    <div className="wapper-nav ">
      <nav className="navbar">
        <ul className="root container">
          {menuList.map((item, idx) => (
            <li key={idx}>
              <NavLink to={item.path} exact activeStyle={{ color: '#ee4d2d' }}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="res">
          <div className="logo-header">
            <img src={logo} alt="" />
          </div>
          <div className="header-search">
            <input
              className="search"
              type="text"
              placeholder="Tìm kiếm tại đây"
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <Space className="icon-menu1" onClick={() => history.push('/cart')}>
            <ion-icon name="bag-outline"></ion-icon>
          </Space>
          <Space className="icon-menu">
            <ion-icon
              onClick={handleClick}
              id="menu-bars"
              name={`${
                isActive ? 'close-outline' : 'menu-outline'
              }`}></ion-icon>
          </Space>
        </div>
      </nav>
    </div>
  );
};
