import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './App.scss';
import store from './store/store';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ReactNotifications isMobile={true} breakpoint={"576px"} />
      <App />
    </React.StrictMode>
  </Provider>
);
