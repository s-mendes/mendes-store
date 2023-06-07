import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner1 from './assets/bannerpromo1.svg';
import Banner2 from './assets/bannerpromo2.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import { Container } from './carousel-styled';

function Carousel() {
  return ( 
    <Container>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="banner"
      >
        <SwiperSlide><img src={Banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Banner2} alt="" /></SwiperSlide>

      </Swiper>
    </Container>
  );
}

export default Carousel;
