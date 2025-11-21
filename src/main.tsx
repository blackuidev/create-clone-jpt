import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext.tsx'; // Import CartProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider> {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>,
);
