import styled from 'styled-components';

export const MainContainer = styled.header `
  z-index: 5;
`;

export const HeaderStyled = styled.div `
  background-color: #00acb7;
  /* position: fixed; */
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img `
 &:hover {
  cursor: pointer;
 }
`;

export const Container = styled.div `
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
  color: white;
  .mobile-menu {
      display: none;
      font-size: 35px;
      min-width: 35px;
  }
  @media screen and (max-width: 1130px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .mobile{
      position: absolute;
      display: flex;
      right: 10px;
      top: 15px;
      align-items: center;
      gap: 1rem;
    }
    .mobile-menu {
      display: block;
    }

  }
`;

export const Login = styled.div `
  display: flex;
  .profile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.3rem;
  }
  .login-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    font-size: 0.75rem;
  }
  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media screen and (max-width: 1130px) {
      display: none;
      pointer-events: none;
  }
`;

export const SocialStyled = styled.div `
  background-color: #00A3AD;
  /* position: fixed; */
  width: 100%;
  z-index: 1;
`;

export const SocialContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px 9px;
  color: white;
  font-size: 0.9rem;
  .whatsapp{
    color: white;
    a {
      text-decoration: underline;
      color: white;
    }
  }
  @media screen and (max-width: 1130px) {
      display: none;
  }
  `;

export const RightBar = styled.div`
  display: flex;
  .pedido{
    border-right: 1px solid #52eaf3;
    padding: 0 16px;
  }
  .desejos{
    padding-left: 16px;
  }
`;

export const SocialMedias = styled.div `
  display: flex;
  gap: 8px;
  /* align-items: center; */
  justify-content: center;
  border-right: 1px solid #52eaf3;
  padding-right: 16px;
  & svg:first-child {
  font-size: 15px;
  }
  & svg:nth-child(2) {
    font-size: 16px;
  }
  & svg:nth-child(3) {
    font-size: 15px;
  }
  & svg:nth-child(4) {
    font-size: 18px;
  }
`;
