import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import FooterPage from '../components/Footer/FooterPage';
import ProductList from '../components/ProductList/ProductList';
import GlobalContext from '../contexts/GlobalContext';

function Product() {
  const { similar } = useContext(GlobalContext);
  return ( 
    <>
      <Header />
      <ProductDetail />
      <ProductList 
        title={'Produtos relacionados'}
        searchItens={similar}
      />
      <FooterPage />
    </>
  );
}

export default Product;
