import React from 'react';
import { BuyButton, CartButton, DescriptionContainer, ImageContainer, Installments, MainContainer, Price, Quantity, SearchCEP, Sizes, Title } from './product-styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper';

function ProductDetail() {

  return ( 
    <MainContainer>
      <ImageContainer>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://nerdstore.com.br/wp-content/uploads/2020/10/camiseta-senhor-k-e-melhor-ter-paz-do-que-estar-certo-black-edition-01.jpg.webp" alt="" /></SwiperSlide>
        </Swiper>
      </ImageContainer>
      <DescriptionContainer>
        <Title>Camiseta Senhor K É Melhor Ter Paz Black Edition</Title>
        <Price>
          <p>R$79,90</p>
          <Installments>ou 12x sem juros de R$6,66</Installments>
        </Price>
        <Sizes>
          <p>Tamanhos disponíveis:</p>
          <div><span>PP</span></div>
          <div><span>P</span></div>
          <div><span>M</span></div>
          <div><span>G</span></div>
          <div><span>2G</span></div>
          <div><span>3G</span></div>
          <div><span>4G</span></div>
        </Sizes>
        <Quantity>Quantidade: <input type="number" /> Estoque disponível </Quantity>
        <BuyButton>Comprar Agora</BuyButton>
        <CartButton>Adicionar ao carrinho</CartButton>
        <SearchCEP><input type="number" /><button>Buscar</button><span>Não sei meu CEP</span></SearchCEP>
      </DescriptionContainer>
    </MainContainer>
  );
}

export default ProductDetail;
