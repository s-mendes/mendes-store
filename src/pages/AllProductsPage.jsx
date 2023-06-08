import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import AllProducts from '../components/AllProducts/AllProducts';
import FooterPage from '../components/Footer/FooterPage';
import { useLocation } from 'react-router-dom';

function AllProductsPage() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  },[pathname]);

  return ( 
    <>
      <Header />
      <AllProducts />
      <FooterPage />
    </>
  );
}

export default AllProductsPage;
