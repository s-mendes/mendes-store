import styled from "styled-components";

export const Footer = styled.footer`
  color: gray;
  

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
    margin-top:1rem;
    color: gray;
    
    .name{
      flex: 1 0 140px;
      height: 2rem;
      border-radius: 5px;
      text-align:center;
      border: 1px solid lightgray;
    }
    .email{
      flex: 1 0 140px;
      height: 2rem;
      text-align:center;
      border-radius: 5px;
      border: 1px solid lightgray;
    }
    .button{
      flex: 1 0 40px;
      height: 2rem;
      color: gray;
      max-width:7rem;
      min-width:5rem;
      border-radius: 5px;
      background-color:white;
      border: 1px solid lightgray;
    }
  }

  div {
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1% 2% 0 2%;
  }
`;
export const SubMenu = styled.div`
  border-top: 1px solid lightgray;
  width: 50vw;
  display: flex;

  ul {
    list-style: none;
    margin-top: 1rem;

    h3 {
      margin-bottom: 1vw;
    }
    li {
      margin-top: 0.4vh;
    }
  }
`;

export const SocialMedias = styled.div`
  max-width: 8vw;
  min-width: 90%;
  padding-top:2.5rem;
  color: #05acb7;
  font-size: 1.5rem;
`;

export const CopyRight =styled.div`
display: flex;
justify-content:center;
height: 10vh;
align-items:center;
background-color:lightgrey;
margin-top:2rem;
`
  
export const Pay = styled.div`
color:gray;
`