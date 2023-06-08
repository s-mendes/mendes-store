import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  color: #757575;
  padding: 20px;
`;

export const BannerContainer = styled.div`

  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Banners = styled.img`
  border-radius: 8px;
  width: 100%;
`;
