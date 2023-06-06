import React, { useEffect, useState } from 'react';
import { AiOutlineCreditCard, AiOutlineHeart, AiOutlineShareAlt, AiOutlineShoppingCart } from 'react-icons/ai';
import { BuyButton, CartButton, DescriptionContainer, Icons, ImageContainer, Installments, MainContainer, Price, Quantity, SearchCEP, Sizes, Title } from './product-styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api/mercadoLivreAPI';
import formatCurrency from '../../util/formatCurrency';

function ProductDetail() {

  const [ loadProduct, setLoadProduct]  = useState(true);
  const [ product, setProduct] = useState([]);
  const [ thumbsSwiper, setThumbsSwiper] = useState(null);

  const pathParams = useParams();

  async function getProduct() {
    try {
      setLoadProduct(true);
      const productDetails = await fetchProduct(`${pathParams.productId}`);
      const result = await Promise.all([productDetails]);
      const [productResult] = result;
      setProduct(productResult.data);
      setLoadProduct(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  }, [pathParams]);
  
  function renderProduct() {
    return (
      <MainContainer>
        <div>
          <ImageContainer>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="main-image"
            >
              {product.pictures.map((pic) => {
                return (
                  <SwiperSlide key={pic.id}>
                    <img src={pic.url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="slides-image"
            >
              {product.pictures.map((pic) => {
                return (
                  <SwiperSlide key={pic.id}>
                    <img src={pic.url} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ImageContainer>
          <DescriptionContainer>
            <Icons>
              <AiOutlineShareAlt />
              <AiOutlineHeart />
            </Icons>
            <Title>{product.title}</Title>
            <Price>
              <p>{formatCurrency(product.price)}</p>
              <Installments>ou 12x sem juros de {formatCurrency(product.price/12)}</Installments>
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

  return ( 
    <>
      { loadProduct || renderProduct()}
    </>
  );
}

export default ProductDetail;
