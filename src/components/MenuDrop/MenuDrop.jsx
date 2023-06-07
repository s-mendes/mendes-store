import React from 'react';
import { Menu, Menu1, Menu2, Menu3, Title } from './menu-drop-styled';
import { useNavigate } from 'react-router-dom';
import { goToAllProducts } from '../../route/coordinator';

function MenuDrop() {
  const navigate = useNavigate();
  return ( 
    <Menu>
      <Menu1>
        <Title>Roupas <span>[+]</span></Title>
        <ul>
          <li><a onClick={() => goToAllProducts(navigate)}>Camisetas</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Camisetas Polo</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Calças Casuais</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Calças Casuais</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Calças Jeans</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Moletons</a></li>
        </ul>
      </Menu1>
      <Menu2>
        <Title>Calçados <span>[+]</span></Title>
        <ul>
          <li><a onClick={() => goToAllProducts(navigate)}>Tênis Casual</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Tênis de Corrida</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Botas</a></li>
          <li><a onClick={() => goToAllProducts(navigate)}>Chinelos e Slides</a></li>
        </ul>
      </Menu2>
      <Menu3>
        
        <Title>Marcas preferidas dos clientes <span>[+]</span></Title>
        <div>
          <ul>
            <li><a onClick={() => goToAllProducts(navigate)}>Hurley</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Volcon</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>New Era</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Rusty</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Hang Loose</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Oakley</a></li>
          </ul>
          <ul>
            <li><a onClick={() => goToAllProducts(navigate)}>Quiksilver</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>D.C. Shoes</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Reserva</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Nike</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Adidas</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Converrse</a></li>
          </ul>
          <ul>
            <li><a onClick={() => goToAllProducts(navigate)}>Vans</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Ride</a></li>
            <li><a onClick={() => goToAllProducts(navigate)}>Asics</a></li>
          </ul>
        </div>
      </Menu3>

    </Menu>
  );
}

export default MenuDrop;
