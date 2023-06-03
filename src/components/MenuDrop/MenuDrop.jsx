import React from 'react';
import { Menu, Menu1, Menu2, Menu3, Title } from './menu-drop-styled';

function MenuDrop() {
  return ( 
    <Menu>
      <Menu1>
        <Title>Roupas <span>[+]</span></Title>
        <ul>
          <li><a href="#">Camisetas</a></li>
          <li><a href="#">Camisetas Polo</a></li>
          <li><a href="#">Calças Casuais</a></li>
          <li><a href="#">Calças Casuais</a></li>
          <li><a href="#">Calças Jeans</a></li>
          <li><a href="#">Moletons</a></li>
        </ul>
      </Menu1>
      <Menu2>
        <Title>Calçados <span>[+]</span></Title>
        <ul>
          <li><a href="#">Tênis Casual</a></li>
          <li><a href="#">Tênis de Corrida</a></li>
          <li><a href="#">Botas</a></li>
          <li><a href="#">Chinelos e Slides</a></li>
        </ul>
      </Menu2>
      <Menu3>
        
        <Title>Marcas preferidas dos clientes <span>[+]</span></Title>
        <div>
          <ul>
            <li><a href="#">Hurley</a></li>
            <li><a href="#">Volcon</a></li>
            <li><a href="#">New Era</a></li>
            <li><a href="#">Rusty</a></li>
            <li><a href="#">Hang Loose</a></li>
            <li><a href="#">Oakley</a></li>
          </ul>
          <ul>
            <li><a href="#">Quiksilver</a></li>
            <li><a href="#">D.C. Shoes</a></li>
            <li><a href="#">Reserva</a></li>
            <li><a href="#">Nike</a></li>
            <li><a href="#">Adidas</a></li>
            <li><a href="#">Converrse</a></li>
          </ul>
          <ul>
            <li><a href="#">Vans</a></li>
            <li><a href="#">Ride</a></li>
            <li><a href="#">Asics</a></li>
          </ul>
        </div>
      </Menu3>

    </Menu>
  );
}

export default MenuDrop;
