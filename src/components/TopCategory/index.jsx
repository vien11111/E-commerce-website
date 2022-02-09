import React from 'react';
import Heading from 'components/Heading';

import { Col, Row } from 'antd';

import { AppImage } from 'components/AppImage';

import wear from 'assets/img/category_ao_nu.jpeg';
import pants from 'assets/img/category_quan_nu.jpeg';
import skirt from 'assets/img/category_vay_nu.jpeg';
import suit from 'assets/img/category_do_bo_nu.jpeg';

import './styles.scss';
import PropTypes from 'prop-types';

const TopCategory = ({ categories }) => {
  return (
    <section className="pt-50">
      <Heading>TOP DANH MỤC ĐANG BÁN CHẠY NHẤT</Heading>
      <span
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '7px 0',
        }}>
        Hãy nhanh tay sở hữu những sản phẩm bán chạy nhất tại Passina
      </span>

      <Row gutter={24}>
        {categories.map((elm, idx) => (
          <Col key={idx} xs={12} lg={6}>
            <div className="tCategory">
              <AppImage src={elm.src} style={{ position: 'relative' }}>
                <div className="tCategory__tag">{elm.category}</div>
              </AppImage>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

TopCategory.propTypes = {
  categories: PropTypes.array,
};

TopCategory.defaultProps = {
  categories: [
    { src: wear, category: 'Áo Nữ' },
    { src: pants, category: 'Quần Nữ' },
    {
      src: skirt,
      category: 'Váy Nữ',
    },
    { src: suit, category: 'Đồ Bộ Nữ' },
  ],
};

export default TopCategory;
