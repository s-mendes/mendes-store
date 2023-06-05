import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import ProductList  from '../components/ProductList/ProductList';
import FooterPage from '../components/Footer/FooterPage';

function PaginaInicial() {
  return ( 
    <>
      <Header />
      <Carousel />
      <ProductList 
        title={'Confira nossa lista de pijamas femininos'}
        searchItens={'pijamas femininos'}
      />
      <ProductList 
        title={'Moletons para ficar quentinho no frio'}
        searchItens={'moletons'}
      />
      <FooterPage />
    </>
  );
}

export default PaginaInicial;
