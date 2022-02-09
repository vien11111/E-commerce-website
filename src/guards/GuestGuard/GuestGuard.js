import { ACCESS_TOKEN, PATH_NAME } from 'config';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const GuestGuard = (props) => {
  const isAuth = Boolean(localStorage.getItem(ACCESS_TOKEN));
  if (isAuth) return <Redirect to={PATH_NAME.ROOT} />;
  return <Route {...props} />;
};

export default GuestGuard;
