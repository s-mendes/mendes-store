import React from 'react';
import { Banners, BannerContainer, MainContainer, Title } from './styled';

function Banner(props) {
  const { banner1, banner2, title } = props;
  return ( 
    <>
      <MainContainer>
        <Title>{title}</Title>
        <BannerContainer>
          <Banners src={banner1}/>
          <Banners src={banner2}/>
        </BannerContainer>
      </MainContainer>
    </>
  );
}

export default Banner;
