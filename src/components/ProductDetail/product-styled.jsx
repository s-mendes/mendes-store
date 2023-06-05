import styled from 'styled-components';

export const MainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const ImageContainer = styled.div`
max-width: 666px;
  &img{
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    
  }
`;
  
export const DescriptionContainer = styled.div`
  width: 332px;
  display: flex;
  gap: 20px;
  flex-direction: column;
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
  
`;

export const Quantity = styled.div`
  
`;

export const BuyButton = styled.div`
  
`;

export const CartButton = styled.div`
  
`;

export const SearchCEP = styled.div`
`;
