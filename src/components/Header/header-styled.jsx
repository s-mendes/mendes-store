import styled from 'styled-components';

export const HeaderStyled = styled.header `
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
  align-items: center;
  justify-content: center;
  border-right: 1px solid #52eaf3;
  padding-right: 16px;
`;
