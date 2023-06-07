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
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 15px;
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
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  &>div{
    height: 390px;
  }
`;

