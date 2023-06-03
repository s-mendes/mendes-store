import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  top: 80px;
  right: 0;
  opacity: 0;
  z-index: 5;
  display: none;
  align-items: center;
  justify-content: center;
  background: white;
  pointer-events: none;
  transform: translateX(350px);

  ${ ({ menuMobileIsVisible }) =>  menuMobileIsVisible && `
      display: flex;
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      -ms-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition all 0.3s;
  `}
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    

`;
export const MenuItem = styled.a`
    border-top: 1px solid #e9eae9;
    width: 350px;
    padding: 10px 20px;
    :link {
        color: #757575;
        text-decoration: none;
        font-weight: 400;
        font-size: 1.2rem;
    }
    :visited {
        color: #757575;
    }
`;

export const Login = styled.div `
  padding: 30px 20px;
  color: #757575;
  display: flex;
  .profile-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  .login-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
    font-size: 0.9rem;
  }
  .link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const UserContainer = styled.div `
  display: flex;
  justify-content: space-between;
  width: 100%;
  .icons{
    color: #00A3AD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
    padding: 20px 10px;
  }
`;
