import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 25px;
  &>h2{
    font-size: 24px;
    margin-bottom: 8px;
    color: #757575;
  }
  &>p{
    color: #757575;
    padding-bottom: 25px;
  }
  &>div{
    display: flex;
  }
`;

export const TableCart = styled.table`
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
`;

export const TableHeader = styled.thead`
  height: 40px;
  display: table-header-group;
  vertical-align: middle;
  font-weight: 200;
  font-size: 14px;
  color: #757575;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 8px;
  
  & tr {
    border-bottom: 1px solid #000;
    border-radius: 8px 0 0 8px;
    padding: 8px;
  }
  .prod-name{
    padding-left: 40px;
    border-radius: 8px 0 0 8px;
  }
  .remove{
    border-radius: 0 8px 8px 0;
  }
  .remove span {
    opacity: 0;
  }
  & th {
    font-weight: 400;
    border-bottom: 1px solid #ebebeb;
    background-color: #fff;
  }
`;

export const Products = styled.tbody`
  text-align: center;
  
`;

export const ProductLine = styled.tr`
  & img {
    max-height: 80px;
    padding: 10px 10px 10px 15px;
  }
  & td {
    background-color: #fff;
    color: #757575;
    font-size: 14px;
    font-weight: 600;
  }
  .inicio {
    border-radius: 8px 0 0 8px;
    border-left: 8px solid #00ACB7;
  }
  .fim{
    border-radius: 0 8px 8px 0;
    font-size: 20px;
    cursor: pointer;
  }
  .add-remove{
    width: 65px;
    border: 1px solid #e9eae9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    padding: 2px 0px;
    margin: 0 auto;
  }
  .add-remove svg{
    cursor: pointer;
    font-size: 20px;
    margin: 0 5px
  }
`;

export const Frete = styled.section`
  flex-grow: 2.5;
  padding: 15px;
  background-color: #fff;
  color: #757575;
  font-size: 14px;
  line-height: 17px;
  padding: 16px;
  font-weight: 500;
  margin: 20px 20px 0 0;
  border-radius: 8px;
  & h2{
    padding-bottom: 15px;
  }
  .dontknow{
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
  .options{
    font-weight: 400;
    margin: 20px 0 10px 0;
  }
  .options-box{
    margin: 10px 0;
    background-color: #ebebeb99;
    font-weight: 400;
    border-radius: 6px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cf2e2e
  }
`;

export const Resumo = styled.section`
  margin: 20px 0 0 0;
  flex-grow: 1;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  flex-direction: column;
  padding: 20px;
  h2{
    font-weight: 400;
    color: #757575;
    font-size: 20px;
    padding-bottom: 14px;
  }
  div{
    font-weight: 500;
    font-size: 14px;
    color: #757575;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e9eae9;
    padding: 14px 0;
  }
  .total {
    color: #000;
    font-weight: 600;
    font-size: 20px;
  }
  &>button{
    color: #fff;
    background-color: #00A3AD;
    font-weight: 500;
    font-size: 19px;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border: none;
    padding: 13px;
    border-radius: 25px;
  }
`;
