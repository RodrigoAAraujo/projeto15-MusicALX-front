import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './API/cart';
import { UserProvider } from './API/user';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
);
