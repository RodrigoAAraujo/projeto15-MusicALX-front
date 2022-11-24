import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './API/cart';
import { SidebarProvider } from './API/sidebar';
import { UserProvider } from './API/user';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <SidebarProvider>
         <App />
        </SidebarProvider>
      </UserProvider>
    </CartProvider>
  </React.StrictMode>
);
