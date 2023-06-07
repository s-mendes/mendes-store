import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
// import ErrorPage from '../pages/ErrorPage';
import React from 'react';
import Product from '../pages/Product';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import AllProductsPage from '../pages/AllProductsPage';

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route index element={ <PaginaInicial />} />
        <Route path="/product/:productId" element={ <Product /> } />
        <Route path="/products/" element={ <AllProductsPage /> } />
        <Route path="/cart" element={ <CartPage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={ <SignUpPage /> } />
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
