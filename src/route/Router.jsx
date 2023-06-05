import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
// import ErrorPage from '../pages/ErrorPage';
import React from 'react';
import Product from '../pages/Product';

function Router() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route index element={ <PaginaInicial />} />
        <Route path="/product" element={ <Product /> } />
        {/* <Route path="*" element={ <ErrorPage /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
