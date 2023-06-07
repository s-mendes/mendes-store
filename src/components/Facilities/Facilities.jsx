import React from 'react';
import { Container } from './styled';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { MdOutlinePix } from 'react-icons/md';
import { BsTruck } from 'react-icons/bs';
import { BiPackage } from 'react-icons/bi';

function Facilities() {
  return ( 
    <>
      <Container>
        <div className="container">
          <div><AiOutlineCreditCard /><span className="description">Divida em até 12 vezes</span></div>
          <div><MdOutlinePix /><span className="description">Ganhe desconto no pix</span></div>
          <div><BsTruck /><span className="description">Entrega super rápida</span></div>
          <div><BiPackage /><span className="description">Frete grátis para todo Brasil</span></div>
        </div>
      </Container>
    </>
  );
}

export default Facilities;
