import { Row } from 'antd';
import { get } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from 'utils/currency';

import './styles.scss';

const initialProps = {
  discount: 5,
  productName: 'Áo Thun nam xịn',
  price: 399000,
};

export const AppCardProduct = ({ product = initialProps }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={get(
            product,
            'imageProductId.images[0].path',
            'https://storage.googleapis.com/cdn.nhanh.vn/store/3138/ps/20210703/APM3013_GHI_QSM4007_DEN__4__thumb.jpg'
          )}
          alt=""
        />
        <div className="card__tag">-{product.discount}%</div>
        <div className="card__tag-new"> Mới</div>

        <div className="card__detail">
          <Row align="center">
            <div>
              <Link to={`product/${product.id}`} style={{ color: '#fff' }}>
                Xem chi tiết
              </Link>
            </div>
            <div
              style={{
                paddingLeft: 5,
              }}>
              {/*<ion-icon name="eye-outline" />*/}
            </div>
          </Row>
          <Row align="center">
            <div>|</div>
          </Row>
          <Row align="center">
            <div>Mua ngay</div>
            <div
              style={{
                paddingLeft: 5,
              }}>
              {/*<ion-icon name="cart-outline" />*/}
            </div>
          </Row>
        </div>
      </div>

      <div className="card__description">
        <div className="card__title">{product.productName}</div>
        <div className="card__price">
          <div className="card__discount">
            {formatCurrency(
            product.price - product.price * (product.discount / 100)
             )}
          </div>
          <div className="card__origin">{formatCurrency(product.price)}</div>
        </div>
      </div>
    </div>
  );
};

AppCardProduct.propTypes = {
  // img: PropTypes.string.isRequired,
  // discount: PropTypes.number,
  // isNew: PropTypes.bool,
  // title: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
};
