import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="product" element={<ProductDetails />} />
      <Route path="*" element={<h2>404. Something went wrong!</h2>} />
    </Routes>
  </BrowserRouter>
);
