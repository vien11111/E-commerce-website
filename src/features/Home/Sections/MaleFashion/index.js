import { unwrapResult } from '@reduxjs/toolkit';
import { Row, Skeleton } from 'antd';
import TagName from 'components/AppTag';
import Heading from 'components/Heading';
import SlideProduct from 'components/SlideProduct';
import { getProductAsync } from 'features/productSlice';
import { useGetCategory } from 'hooks/useGetCategory';
import { get, keyBy, values } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const MaleFashion = () => {
  const dispatch = useDispatch();
  const [currentTag, setCurrentTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [productListData, setProductListData] = useState({});

  const [defaultParams, setDefaultParams] = useState({
    populate: 'imageProductId,categoryId,colorId',
    page: 1,
    limit: 10,
    male: 1,
    sortBy: 'price:desc',
  });

  const { categoryData } = useGetCategory({ male: 1, limit: 4 });

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
  }, [defaultParams, currentTag, dispatch]);

  useEffect(() => {
    const initialCategory = get(values(categoryData), '[0].id', '');
    setCurrentTag(initialCategory);
    setDefaultParams((prevState) => ({
      ...prevState,
      categoryId: initialCategory,
      male: +1,
    }));
  }, [categoryData]);

  const onHandleTagName = (tagId) => {
    setCurrentTag(tagId);
    setDefaultParams((prevState) => ({
      ...prevState,
      categoryId: tagId,
      male: +1,
    }));
  };

  return (
    <section className="pt-50">
      <Heading>THỜI TRANG NAM</Heading>
      <i>
        Passina Men Fashion mang lại sự hòa hợp về cá tính, đem lại cảm giác
        thoải mái từ bên trong và tư tin ở bên ngoài với các sản phẩm thời trang
        quốc dân như áo polo, áo thun, áo sơ mi, quần âu, quần jean và giày nam.
      </i>

      <div className="home-tag">
        <Row align={'middle'} justify={'center'}>
          {values(categoryData).map((tag, idx) => (
            <TagName
              key={idx}
              isActive={currentTag === tag.id}
              onClick={() => onHandleTagName(tag.id)}>
              {tag.categoryName}
            </TagName>
          ))}
        </Row>
      </div>

      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {values(productListData).length > 0 ? (
            <SlideProduct data={values(productListData)} />
          ) : (
            <h3> Sản phẩm trống trong danh mục</h3>
          )}
        </>
      )}
    </section>
  );
};

export default MaleFashion;
