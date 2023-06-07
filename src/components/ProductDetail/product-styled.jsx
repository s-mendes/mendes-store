import styled from 'styled-components';

export const MainContainer = styled.div`

  background-color: #fff;
  padding: 30px 0;
  &>div{
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (max-width: 768px) {
    &>div{
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 650px;
  max-height: 850px;
  padding-right: 15px;

  &img{
    aspect-ratio: 1 / 1;
  }
  .swiper {
  /* width: 100%;
  height: 100%; */
  margin-left: auto;
  margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .main-image {
    /* height: 80%;
    width: 100%; */
    max-height: 664px;
    width: auto;
  }

  .slides-image {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .slides-image .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .slides-image .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    max-height: 664px;
    object-fit: cover;
  }


  .main-image {
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #E9EAE9;
    margin-bottom: 16px;
  }

  .swiper-button-prev,
  .swiper-button-next {
  color: #757575;
  }

`;
  
export const DescriptionContainer = styled.div`
  width: 332px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Icons = styled.div`
  display: flex;
  color: #757575;
  font-size: 1.6rem;
  align-items: center;
  justify-content: right;
  transform: translateY(10px);
  gap: 5px;
  &>svg{
    cursor: pointer;
  }
`;
  
export const Title = styled.div`
  font-weight: 800;
  font-size: 28px;
  color: #3B3A38;
  line-height: 30px;
  margin-bottom: 32px;
`;

export const Price = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 1px;
  color: #00ACB7;
`;

export const Installments = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  color: #757575;
  margin-bottom: 24px;
  letter-spacing: 0px;
`;

export const Sizes = styled.div`
  color: #a5a5a5;
  font-size: 14px;
  font-weight: 500;
  &>p{
    margin-bottom: 20px;
  }
  &>div{
    border: 1px solid #a5a5a5;
    width: 34.5px;
    height: 34.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    cursor: pointer;
    border-radius: 8px;
    margin: 0 7px 7px 0;
  }
  &>div:hover{
    color: #fff;
    background-color: #00A3AD;
    border: 1px solid #00A3AD;
  }
`;

export const Quantity = styled.div`
  font-weight: 600;
  line-height: 17px;
  font-size: 12px;
  color: #757575;
  border-bottom: 1px solid #E9EAE9;
  &>input{
    width: 39px;
    height:32px;
    border: 1px solid #a5a5a5;
    text-align: center;
    margin-right: 10px;
    border-radius: 8px;
  }
  &>input::-webkit-outer-spin-button,
  &>input::-webkit-inner-spin-button {
    display: none;
  }
  &>span{
    margin-right: 10px;
  }
  &>p{
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const BuyButton = styled.button`
  background-color: #00A3AD;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  cursor: pointer;
  font-weight: 500;
  line-height: 1em;
  font-size: 18px;
  border: none;
  height: 50px;
  &>svg{
    font-size: 25px;
    margin-right: 10px;
  }
`;

export const CartButton = styled.button`
  background-color: #E6F7F8;
  color: #00ACB7;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  cursor: pointer;
  font-weight: 500;
  line-height: 1em;
  font-size: 18px;
  border: 1px solid #73D2D7;
  height: 50px;
  &>svg{
    font-size: 25px;
    margin-right: 10px;
  }
`;

export const SearchCEP = styled.div`
  color: #757575;
  font-size: 14px;
  line-height: 17px;
  padding: 16px 0;
  border-top: 1px solid #E9EAE9;
  font-weight: 500;
  &>p:first-child{
    padding-bottom: 15px;
  }
  &>p:last-child{
    padding-top: 15px;
    color:#00A3AD;
    text-decoration: underline;
    cursor: pointer;
  }
  &>input{
    font-size: 16px;
    padding: 10px 20px;
    line-height: 1em;
    color: #757575;
    background-color: #E9EAE9;
    border-radius: 8px 0 0 8px;
    height: 40px;
    border: none;
  }
  &>button{
    border: none;
    background-color: #00A3AD;
    color: #fff;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 10px 20px;
    font-size: 16px;
    width: 86px;
    height: 40px;
    font-weight: 500;
    cursor: pointer;
  }
  &>input::-webkit-outer-spin-button,
  &>input::-webkit-inner-spin-button {
    display: none;
  }
`;
