import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const LoadingGlobal = () => {
  const { isLoading } = useSelector((state) => state.loadingGlobal);
  return (
    <>
      {isLoading && (
        <div className="loading-global">
          <Spin />
        </div>
      )}
    </>
  );
};

LoadingGlobal.propTypes = {};

export default LoadingGlobal;
