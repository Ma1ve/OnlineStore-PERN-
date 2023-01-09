import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
    <App />
  </Context.Provider>,
);
