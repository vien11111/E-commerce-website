import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const ListPage = () => {
  return (
    <div>
      this is ListPage list product
      <Button>abc</Button>
      <Link to="/product/1">To Detail product</Link>
    </div>
  );
};

export default ListPage;
