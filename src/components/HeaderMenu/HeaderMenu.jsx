import React, { useContext } from 'react';
import { MenuContainer, MainMenu, Categories, MainContainer, DropdownMenu } from './headerMenu-styled';
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import MenuDrop from '../MenuDrop/MenuDrop';
import GlobalContext from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { goToAllProducts } from '../../route/coordinator';

function HeaderMenu() {

  const { menuIsVisible, setMenuIsVisible } = useContext(GlobalContext);
  const navigate = useNavigate();
  // function handleMenuToggle () {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  return ( 
    <>
      <MainContainer>
        <MenuContainer>
          <MainMenu onMouseOver={() => setMenuIsVisible(true)} onMouseLeave={() => setMenuIsVisible(false)} onClick={() => goToAllProducts(navigate)}>
            <MdMenu />
            <span>Todas as Categorias</span>
            <MdKeyboardArrowDown />

          </MainMenu>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Feminino</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Masculino</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Infantil</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Acessórios</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Calçados</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Decoração</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories onClick={() => goToAllProducts(navigate)}>
            <span>Outlet</span>
            <MdKeyboardArrowRight />
          </Categories>
        </MenuContainer>
      </MainContainer>
      <DropdownMenu menuIsVisible={menuIsVisible} onMouseOver={() => setMenuIsVisible(true)} onMouseLeave={() => setMenuIsVisible(false)}>
        <MenuDrop />
      </DropdownMenu>
    </>
  );
}

export default HeaderMenu;
