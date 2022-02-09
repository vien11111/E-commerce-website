import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'language/i18n';
import { Spin } from 'antd';

import 'assets/styles/index.scss';

const Providers = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense
            fallback={
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translateX(-50%, -50%)',
                }}>
                <Spin />
              </div>
            }>
            {children}
          </Suspense>
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
};

export default Providers;
