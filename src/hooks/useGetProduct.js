import { unwrapResult } from '@reduxjs/toolkit';
import { LIMIT } from 'config';
import { getProductAsync } from 'features/productSlice';
import { get, keyBy } from 'lodash';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
const hardQuery = {
  populate: 'imageProductId,categoryId,colorId',
  page: 1,
  limit: LIMIT,
  male: null,
  categoryId: null,
  sortBy: null,
};

export const useGetProduct = (defaultParams) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [productListData, setProductListData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const params = { ...hardQuery, ...defaultParams, ...qs.parse(location.search) };

        const action = await dispatch(getProductAsync(params));
        const { totalResults, results } = unwrapResult(action);
        setTotal(totalResults);
        setProductListData(keyBy(results, 'id'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [location, dispatch]);

  return {
    page: Number(get(qs.parse(location.search), 'page', 1)),
    total,
    isFetchData: isLoading,
    productListData,
    setProductListData,
  };
};
