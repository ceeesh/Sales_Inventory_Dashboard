import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { HashRouter } from 'react-router-dom';
// import './assets/base.css';
import Main from './DemoPages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
// const rootElement = document.getElementById('root');
if (typeof window !== 'undefined') {
  window.process = { env: {} };
}

const renderApp = Component => {
  if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <Provider store={store}>
        <HashRouter>
          <Component />
        </HashRouter>
      </Provider>,
    )
  }
}

renderApp(Main);

