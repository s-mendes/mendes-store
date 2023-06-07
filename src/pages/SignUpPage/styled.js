import styled from 'styled-components';

export const FullContainer = styled.main`
  width: 100%;
`;

export const MainContainer = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 75px;
  background-color: #fff;
  margin: 20px auto;
  max-width: 400px;
  border-radius: 8px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  button {
    font-size: 14px;
    width: 100%;
    align-self: center;
    flex: 1 0 40px;
    height: 2rem;
    color: #fff;
    border-radius: 15px;
    background-color:white;
    background-color: #00acb7;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
font-size: 14px;
  color: #757575;
  display: flex;
  height: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  & input{
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
`;
