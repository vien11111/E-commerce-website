import { getCategoryAsync } from 'features/categorySlice';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

export const useGetCategory = ({ male = 0, limit = 5 }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const getCategoryAction = await dispatch(
          getCategoryAsync({ male, limit })
        );
        const { results } = unwrapResult(getCategoryAction);
        setCategoryData(results);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return {
    isLoading,
    categoryData,
  };
};
