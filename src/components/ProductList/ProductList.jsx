import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import ProductCard from '../ProductCard/ProductCard';
import { fetchItems } from '../../api/mercadoLivreAPI';
import { Container, ProductListStyled, Title } from './productlist-styled';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { Pagination, Navigation } from 'swiper';

function ProductList(props) {
  const { load, setLoad } = useContext(GlobalContext);
  const [ roupasFemininas, setRoupasFemininas] = useState([]);
  const { title, searchItens } = props;

  async function getProducts() {
    try {
      setLoad(true);
      const products = await fetchItems(searchItens);
      const result = await Promise.all(products);
      setRoupasFemininas(result);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return ( 
    <Container>
      <Title>
        {title}
      </Title>
      {load || 
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          centeredSlides={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="products"
        >
          <ProductListStyled>
            {roupasFemininas.map( product => (
              <SwiperSlide key={product.id}>
                <ProductCard  product={product}/>
              </SwiperSlide>
            ))}
          </ProductListStyled>
        </Swiper>
      }
    </Container>
  );
}

export default ProductList;
