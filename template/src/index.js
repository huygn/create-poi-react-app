import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '@poi/plugin-sw-precache/register-service-worker';
import { AppContainer } from 'react-hot-loader';

import './index.css';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

registerServiceWorker();
