import React, { useContext } from 'react';
import { HeaderStyled, Container, Logo, Login, SocialStyled, SocialContainer, SocialMedias, RightBar, MainContainer } from './header-styled';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';
import logo from './logo.svg';
import { CgProfile } from 'react-icons/cg';
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { goHome, goToLogin, goToSignUp } from '../../route/coordinator';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import MenuMobile from '../MenuMobile/MenuMobile';
import GlobalContext from '../../contexts/GlobalContext';
import { MdMenu } from 'react-icons/md';


function Header () {

  const navigate = useNavigate();
  const { setMenuMobileIsVisible } = useContext(GlobalContext);

  return (
    <MainContainer>
      <SocialStyled>
        <SocialContainer>
          <span className="whatsapp">
            Precisa de ajuda? Chame no WhatsApp <a href="https://api.whatsapp.com/send?phone=5537999966963&text=Ol%C3%A1%20Fashion%20Fusion,%20preciso%20de%20ajuda">(37) 9.9996-6963</a>
          </span>
          <RightBar>
            <SocialMedias>
              <BsInstagram />
              <BsTwitter />
              <BsFacebook />
              <BsYoutube />
            </SocialMedias>
            <span className="pedido">
            Rastrear Pedido
            </span>
            <span className="desejos">
            Lista de Desejos
            </span>
          </RightBar>
          
        </SocialContainer>
      </SocialStyled>
      <HeaderStyled>
        <Container>
          <Logo src={logo} onClick={() => goHome(navigate)}/>
          <SearchBar />
          <Login>
            <div className={'profile-icon'}>
              <CgProfile />
            </div>
            <div className={'login-text'}>
              <p>
              Faça <b className={'link'} onClick={() => goToLogin(navigate)}>LOGIN</b> ou 
              </p>
              <p>
              crie seu <b className={'link'} onClick={() => goToSignUp(navigate)}>CADASTRO</b>
              </p>
            </div>
          </Login>
          <div className="mobile">
            <CartButton className="cart"/>
            <MdMenu onClick={() => setMenuMobileIsVisible(true)} className="mobile-menu"/>
          </div>
          <MenuMobile />
        </Container>
      </HeaderStyled>
      <HeaderMenu />
      
    </MainContainer>
  );
}

export default Header;
