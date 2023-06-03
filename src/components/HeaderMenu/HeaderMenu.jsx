import React, { useContext } from 'react';
import { MenuContainer, MainMenu, Categories, MainContainer, DropdownMenu } from './headerMenu-styled';
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';
import MenuDrop from '../MenuDrop/MenuDrop';
import GlobalContext from '../../contexts/GlobalContext';

function HeaderMenu() {

  const { menuIsVisible, setMenuIsVisible } = useContext(GlobalContext);

  // function handleMenuToggle () {
  //   setIsMenuOpen(!isMenuOpen);
  // }

  return ( 
    <>
      <MainContainer>
        <MenuContainer>
          <MainMenu onMouseOver={() => setMenuIsVisible(true)} onMouseLeave={() => setMenuIsVisible(false)}>
            <MdMenu />
            <span>Todas as Categorias</span>
            <MdKeyboardArrowDown />

          </MainMenu>
          <Categories>
            <span>Feminino</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
            <span>Masculino</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
            <span>Infantil</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
            <span>Acessórios</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
            <span>Calçados</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
            <span>Decoração</span>
            <MdKeyboardArrowRight />
          </Categories>
          <Categories>
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
