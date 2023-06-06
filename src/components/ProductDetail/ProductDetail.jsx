import React from 'react';
import { AiOutlineCreditCard, AiOutlineHeart, AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai';
import { BuyButton, CartButton, DescriptionContainer, Icons, ImageContainer, Installments, MainContainer, Price, Quantity, SearchCEP, Sizes, Title } from './product-styled';

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
      <div>
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
          <Icons>
            <AiOutlineShareAlt />
            <AiOutlineHeart />
          </Icons>
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
          <Quantity><span>Quantidade:</span> <input type="number" placeholder="1"/> <p>Estoque disponível</p> </Quantity>
          <BuyButton><AiOutlineCreditCard />Comprar Agora</BuyButton>
          <CartButton><AiOutlineShoppingCart />Adicionar ao carrinho</CartButton>
          <SearchCEP>
            <p>Consultar prazo e valor do frete:</p>
            <input type="number" /><button>Buscar</button>
            <p>Não sei meu CEP</p></SearchCEP>
        </DescriptionContainer>
      </div>
    </MainContainer>
  );
}

export default ProductDetail;
