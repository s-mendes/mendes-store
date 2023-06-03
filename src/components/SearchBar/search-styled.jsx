import styled from 'styled-components';

export const Form = styled.form`
  background-color: white;
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  gap: 13px;
  padding-right: 13px;
  border-radius: 15px;

  input {
    padding: 13px;
    flex-grow: 1;
    background-color: white;
    outline: none;
    border: none;
    font-size: 0.8rem;
    font-weight: 500px;
    border-radius: 15px;
    color: #757575
  }

  button {
    background: none;
    border: none;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00acb7;
  }
  button:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 1130px) {
    max-width: 100%;
  }
`;
