import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { Switch, Route } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

const Product = () => {
  return (
    <Switch>
      <Route exact path="/product">
        <MainLayout>
          <ListPage />
        </MainLayout>
      </Route>
      <Route path="/product/:id">
        <MainLayout>
          <DetailPage />
        </MainLayout>
      </Route>
    </Switch>
  );
};

Product.propTypes = {};

export default Product;
