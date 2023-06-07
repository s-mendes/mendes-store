import React from 'react';
import { Button, Quantity } from './cart-styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import GlobalContext from '../../contexts/GlobalContext';
import { useContext } from 'react';
import { goToCartPage } from '../../route/coordinator';
import { useNavigate } from 'react-router-dom';

function CartButton () {

  const { setModalCart, cart } = useContext(GlobalContext);
  const navigate = useNavigate();

  function totalItems() {
    let counter = 3;
    for (let i=0; i < cart.length; i++) {
      counter += cart[i].quantity;
    }
    return counter;
  }
    
  return (
    <>
      <Button onClick={() => goToCartPage(navigate)}>
        <AiOutlineShoppingCart onClick={() => setModalCart(true)}/>
        <Quantity>{totalItems()}</Quantity>
      </Button>
            
    </>
  );
}

export default CartButton;
