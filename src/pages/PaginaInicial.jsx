import React from 'react';
import Header from '../components/Header/Header';
import Carousel from '../components/Carousel/Carousel';
import ProductList  from '../components/ProductList/ProductList';
import FooterPage from '../components/Footer/FooterPage';
import Banner from '../components/Banner/Banner';

function PaginaInicial() {
  return ( 
    <>
      <Header />
      <Carousel />
      <Banner 
        banner1={'banner/pijama4.png'} 
        banner2={'banner/pijama2.png'}
        title={'Pijamas é na Fashion Fusion! Confira nossas promoções'}
      />
      <ProductList 
        title={'Confira nossa lista de pijamas femininos'}
        searchItens={'pijamas femininos'}
      />
      <Banner 
        banner1={'banner/moleton2.png'} 
        banner2={'banner/moleton1.png'}
        title={'Arrase no inverno com nossos Moletons Exclusivos: conheça as últimas tendências'}
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
