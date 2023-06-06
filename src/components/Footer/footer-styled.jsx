import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: #fff;
`;

export const Footer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  font-size: 0.9rem;
  color: #757575;
  margin-top: 25px;
  padding: 15px 15px 20px 15px;
`;
export const Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form{
    display: flex;
    flex-wrap:wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-top:1rem;
    color: #757575;
    font-size: 16px;
    font-weight: 400;
    .name{
      flex: 1 0 140px;
      height: 2rem;
      border-radius: 5px;
      text-align:center;
      border: none;
      background-color: #eaeaea55;
      color: #757575;
      font-size: 0.8rem;
      font-weight: 500px;
      border-radius: 15px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    }
    .email{
      flex: 1 0 140px;
      height: 2rem;
      text-align:center;
      border-radius: 5px;
      border: none;
      background-color: #eaeaea55;
      color: #757575;
      font-size: 0.8rem;
      font-weight: 500px;
      border-radius: 15px;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
    }
    .button{
      flex: 1 0 40px;
      height: 2rem;
      color: #fff;
      max-width:7rem;
      min-width:5rem;
      border-radius: 15px;
      background-color:white;
      background-color: #00acb7;
      border: none;
      font-weight: 500;
    }
  }
`;
export const SubMenu = styled.div`
  border-top: 1px solid #eaeaea;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  ul {
    list-style: none;
    margin-top: 1rem;
    font-weight: 700;

    h3 {
      margin-bottom: 1vw;
    }
    li {
      margin-top: 0.4vh;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 8vw;
  justify-content: center;
  min-width: 90%;
  padding-top:2.5rem;
  color: #05acb7;
  font-size: 1.5rem;
`;

export const CopyRight =styled.div`
display: flex;
justify-content:center;
height: 80px;
align-items:center;
background-color: #3b3a38;
color: #fff;
text-align: center;
`;
  
export const Pay = styled.div`
  padding: 20px 0;
  color:gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;
