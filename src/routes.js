import { lazy } from 'react';

import AuthGuard from 'guards/AuthGuard';

import MainLayout from 'layouts/MainLayout';
import DetailPage from 'features/Product/pages/DetailPage';

const HomePage = lazy(() => import('features/Home'));
const FemaleProductPage = lazy(() => import('features/FemaleProduct'));
const MalePagePage = lazy(() => import('features/MalePage'));

const LoginPage = lazy(() => import('features/Auth/Signin'));

const SignupPage = lazy(() => import('features/Auth/Signup'));

const ForgotPassword = lazy(() => import('features/Auth/Forgot'));

const InfoPage = lazy(() => import('features/Profile/Info'));

const ProductDetailPage = lazy(() =>
  import('features/Product/pages/DetailPage')
);
const OrderPage = lazy(() => import('features/Profile/Order'));
const shoppingCart = lazy(() => import('features/Product/pages/Cart'));
const SearchPage = lazy(() => import('features/SearchPage'));

const NotFound = lazy(() => import('features/NotFound'));
const About = lazy(() => import('features/About'));
const Contact = lazy(() => import('features/Contact'));

const SizePage = lazy(() => import('features/Size'));

export const routes = [
  {
    path: '/',
    exact: true,
    layout: MainLayout,
    component: HomePage,
  },
  {
    path: '/female',
    exact: true,
    layout: MainLayout,
    component: FemaleProductPage,
  },
  {
    path: '/male',
    layout: MainLayout,
    component: MalePagePage,
  },
  {
    path: '/child',
    layout: MainLayout,
    component: MalePagePage,
  },
  {
    path: '/signin',
    layout: MainLayout,
    component: LoginPage,
  },
  {
    path: '/signup',
    layout: MainLayout,
    component: SignupPage,
  },
  {
    path: '/forgot',
    layout: MainLayout,
    component: ForgotPassword,
  },
  {
    exact: true,
    path: '/info',
    layout: MainLayout,
    component: InfoPage,
    guard: AuthGuard,
  },
  {
    path: '/product/:id',
    exact: true,
    layout: MainLayout,
    component: ProductDetailPage,
  },
  {
    path: '/order',
    layout: MainLayout,
    component: OrderPage,
    guard: AuthGuard,
  },
  {
    path: '/cart',
    layout: MainLayout,
    component: shoppingCart,
    guard: AuthGuard,
  },
  {
    path: '/size',
    layout: MainLayout,
    component: SizePage,
  },
  {
    path: '/about',
    layout: MainLayout,
    component: About,
  },
  {
    path: '/contact',
    layout: MainLayout,
    component: Contact,
  },
  {
    path: '/search',
    layout: MainLayout,
    component: SearchPage,
  },
  {
    path: '*',
    component: NotFound,
  },
];
