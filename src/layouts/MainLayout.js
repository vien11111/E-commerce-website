import { Layout } from 'antd';
import { AppFooter } from 'components/AppFooter';
import { AppHeader } from 'components/AppHeader';
import { AppMenu } from 'components/AppMenu';
import TopSearch from 'components/TopSearch';
import React from 'react';
import SnowStorm from 'react-snowstorm';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  return (
    <div>
          <SnowStorm snowCharacter="❄"/>
      <AppHeader />
      <AppMenu />
      <Content>{children}</Content>
      <TopSearch />
      <AppFooter />
    </div>
  );
};

export default MainLayout;
