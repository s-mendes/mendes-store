import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    height: 350px;
    max-width: 200px;
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
    -webkit-transition: height 0.2s, opacity 0.8s;
    -moz-transition: height 0.2s, opacity 0.8s;
    transition: height 0.2s, opacity 0.8s;
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
      height: 200px;
    }
    & button{
      opacity: 0;
      /* position: absolute; */

    }
    &:hover {
      height: 385px;
    }
    &:hover{
      button{
        display: block;
        position: relative;
        opacity: 1;
        -webkit-transition:  opacity 0.4s ease-in;
        -moz-transition:  opacity 0.4s ease-in;
        transition:  opacity 0.4s ease-in;
      }
    }
`;

export const Img = styled.img`
  border-radius: 10px 10px 0 0;
  height: 200px;
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
  line-height: 70%;
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
  font-size: 14px;
  color: #75757588;
  text-decoration: line-through;
`;
