import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 10px;
`;

export const Filters = styled.aside`
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  margin-top: 15px;
  color: #757575;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  
  h2{
    color: #3B3A38;
    padding-bottom: 10px;
  }
  p{
    font-size: 14.5px;
    line-height: 1.2rem;
    cursor: pointer;
  }
  p:hover{
    color: #00acb7;
    cursor: pointer;
  }
  .search{
    position: relative;
    margin-bottom: 10px;
  }
  .search input{
    padding-right: 30px;
    height: 2rem;
    border-radius: 5px;
    padding: 0 10px;
    border: none;
    background-color: #eaeaea55;
    color: #757575;
    font-size: 0.8rem;
    font-weight: 500px;
    border-radius: 15px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  }
  .search svg{
    position: absolute;
    top:30%;
    right: 10px;
  }
  @media screen and (max-width: 870px){
    display: none;
  }
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 15px;
  width: 100%;
  h2{
    font-weight: 400;
    font-size: 32px;
    color: #3B3A38;
  }
  .sort{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .sort p{
    font-size: 15px;
    color: #666;
  }
  .sort select{
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #fff;
    background-color: #fff;
    font-size: 14px;
    color: #757575;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 410px;
  gap: 0px 20px;
  &>div{
    height: 350px;
  }
  @media screen and (min-width:616px) and (max-width: 870px){
    gap: 0px 0px;
    grid-auto-rows: 360px;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    & img {
      width: 190px;
    }
    &>div{
      transform: scale(0.9);
    }
  }
  @media screen and (max-width: 615px){
    gap: 0px 0px;
    grid-auto-rows: 345px;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    &>div{
      transform: scale(0.85);
    }
    & img {
      width: 190px;
    }
  }
`;

