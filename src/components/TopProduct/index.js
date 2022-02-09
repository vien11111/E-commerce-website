import { unwrapResult } from '@reduxjs/toolkit';
import { Row, Skeleton } from 'antd';
import TagName from 'components/AppTag';
import Heading from 'components/Heading';
import SlideProduct from 'components/SlideProduct';
import { getProductAsync } from 'features/productSlice';
import { keyBy, values } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const TopProduct = ({ title, male = null }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentTag, setCurrentTag] = useState(male);
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState([]);

  const [defaultParams, setDefaultParams] = useState({
    populate: 'imageProductId,categoryId,colorId',
    page: 1,
    limit: 10,
    male,
    sortBy: 'price:desc',
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const params = { ...defaultParams };
        const action = await dispatch(getProductAsync(params));
        const { results } = unwrapResult(action);
        setProductListData(keyBy(results, 'id'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [defaultParams, dispatch]);

  const onHandleTagName = (male) => {
    setCurrentTag(male);
    setDefaultParams((prevState) => ({ ...prevState, male: +male }));
  };

  const listTag = [
    { label: 'Tất cả', value: null },
    { label: 'Nam', value: 1 },
    { label: 'Nữ', value: 0 },
  ];

  return (
    <section className="pt-50">
      <Heading>{title}</Heading>
      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {listTag.map((tag, idx) => (
            <TagName
              key={idx}
              isActive={currentTag === tag.value}
              onClick={() => onHandleTagName(tag.value)}>
              {tag.label}
            </TagName>
          ))}
        </Row>
      </div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <SlideProduct data={values(productListData)} />
      )}
    </section>
  );
};

TopProduct.propTypes = {
  title: PropTypes.string,
};

TopProduct.defaultProps = {
  title: 'TOP SẢN PHẨM BÁN CHẠY NHẤT TRONG TUẦN',
};

export default TopProduct;
