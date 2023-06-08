import React, { useContext, useEffect, useRef } from 'react';
import { Container, Menu, MenuItem, Login, UserContainer } from './menu-mobile-styled';
import { CgProfile } from 'react-icons/cg';
import GlobalContext from '../../contexts/GlobalContext';
import { goToAllProducts, goToLogin, goToSignUp } from '../../route/coordinator';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineQuestionCircle } from 'react-icons/ai';

function MenuMobile() {
  const { menuMobileIsVisible, setMenuMobileIsVisible } = useContext(GlobalContext);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuMobileIsVisible(false);
    }
  };

  useEffect ( () => {
    document.body.style.overflowY = menuMobileIsVisible ? 'hidden' : 'auto';
  }, [menuMobileIsVisible]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  return ( 
    <Container ref={menuRef} menuMobileIsVisible={menuMobileIsVisible} className="menu">
      <Menu>
        <UserContainer >
          <Login>
            <div className={'profile-icon'}>
              <CgProfile />
            </div>
            <div className={'login-text'}>
              <p>
              Faça <b className={'link'} onClick={() => {
                  setMenuMobileIsVisible(false);
                  goToLogin(navigate);
                }}>LOGIN</b> ou 
              </p>
              <p>
              crie seu <b className={'link'} onClick={() => {
                  setMenuMobileIsVisible(false);
                  goToSignUp(navigate);
                }}>CADASTRO</b>
              </p>
            </div>
          </Login>
          <div className="icons">
            <AiOutlineHeart />
            <AiOutlineQuestionCircle />
          </div>
        </UserContainer>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Todas Categorias</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Feminino</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Masculino</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Infantil</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Acessórios</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Calçados</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Decoração</MenuItem>
        <MenuItem onClick={() => {
          setMenuMobileIsVisible(false);
          goToAllProducts(navigate);
        }} href={'#'}>Outlet</MenuItem>
      </Menu>
    </Container>
  );
}

export default MenuMobile;
