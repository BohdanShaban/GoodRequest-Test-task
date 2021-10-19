import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/app/App';
import { Provider } from "react-redux";
import store from './store'

// import i18n (needs to be bundled ;))
import './localization/i18n.js';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);