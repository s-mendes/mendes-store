import styled from 'styled-components';

export const Button = styled.div `
 font-size: 2.2rem;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 5px;
 border: none;
 background: none;
 cursor: pointer;
 position: relative;
 margin-left: 20px;
 color: white;
`;

export const Quantity = styled.span `
  background-color: white;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 11px;
  font-weight:600;
  color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00acb7;
  border: 2px solid #00acb7
`;
