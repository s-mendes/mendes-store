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
  const [roupasFemininas, setRoupasFemininas] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const {title, searchItens} = props;

  async function getProducts() {
    try {
      setLoad(true);
      const products = await fetchItems(searchItens);
      const result = await Promise.all(products);
      setRoupasFemininas(result);
      console.log(result);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 300) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 750) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1000) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    }

    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return ( 
    <Container>
      
      <Title>
        {title}
      </Title>
      {load || 
        <Swiper
          slidesPerView={slidesPerView}
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
