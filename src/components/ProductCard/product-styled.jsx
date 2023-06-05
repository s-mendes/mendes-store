import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 230px;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    color: #757575;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
    .description {
      border-top: 1px solid #E9EAE9;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      padding: 15px;
      height: 100%;
    }
    .image{
      height: 220px;
    }
    @media screen and (max-width: 500px) {
      width: 95%;
      height: 95%;
    }
`;

export const Img = styled.img`
  border-radius: 10px 10px 0 0;
  height: 220px;
`;

export const ProdName = styled.p `
padding-top: 5px;
  font-size: 14px;
`;

export const Price = styled.p `
  font-size: 20px;
  font-weight: 600;
  display: block;
  color: #00acb7;
`;

export const Installments = styled.p `
  font-size: 15px;
  font-weight: 400;
  color: #757575;
  font-size: 12px;
`;

export const ProdButton = styled.button `
  color: #fff;
  background-color: #00acb7;
  width: 100%;
  border: none;
  height: 30px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const Discount = styled.div `
  font-size: 11px;
  font-weight: 500;
  position: absolute;
  transform: translate(0%, -120%);
  background-color: #FF5E5B;
  color: #fff;
  padding: 4px 8px;
  border-radius: 10px;
`;

export const Prices = styled.div `
`;

export const FullPrice = styled.p `
  color: #75757588;
  text-decoration: line-through;
`;
