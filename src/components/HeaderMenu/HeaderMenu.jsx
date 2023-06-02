import React from 'react';
import { MenuContainer, MainMenu, Categories, MainContainer } from './headerMenu-styled';
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';

function HeaderMenu() {
  return ( 
    <MainContainer>
      <MenuContainer>
        <MainMenu>
          <MdMenu/>
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
  );
}

export default HeaderMenu;
