import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';

import * as serviceWorker from './serviceWorker';
import Providers from './Providers';

import 'react-toastify/dist/ReactToastify.css';
import LoadingGlobal from 'components/LoadingGlobal';

ReactDOM.render(
  <Providers>
    <App />
    <ToastContainer />
    <LoadingGlobal/>
  </Providers>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
