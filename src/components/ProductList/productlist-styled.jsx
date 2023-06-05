import styled from 'styled-components';

export const ProductListStyled = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export const Title = styled.div`
  color: #757575;
  font-weight: 600;
  font-size: 20px;
  padding: 20px 0 20px 20px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
      width: 90%;
    }
`;
