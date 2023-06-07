import React from 'react';
import { Container, Frete, ProductLine, Products, Resumo, TableCart, TableHeader } from './cart-styled';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

function Cart() {
  return ( 
    <>
      <Container>
        <h2>Carrinho</h2>
        <p>Abaixo você confere os produtos do seu carrinho</p>
        <TableCart>
          <TableHeader>
            <tr>
              <th colSpan="2" className="prod-name">Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Subtotal</th>
              <th className="remove"><span>Remover Item</span></th>
            </tr>
          </TableHeader>
          <Products>
            <ProductLine>
              <td className="inicio"><img src="https://http2.mlstatic.com/D_613976-MLB69633007059_052023-O.jpg" /></td>
              <td>Conjunto Feminino Moletom Flanelado Capuz Inverno Promocao</td>
              <td>R$ 179,95</td>
              <td><div className="add-remove"><AiOutlinePlusCircle />1<AiOutlineMinusCircle /></div></td>
              <td>R$ 179,95</td>
              <td className="fim"><BsTrash /></td>
            </ProductLine>
            <ProductLine>
              <td className="inicio"><img src="https://http2.mlstatic.com/D_937865-MLB51733816205_092022-O.jpg" /></td>
              <td>Moletom Liso Algodão Unissex Blusa De Frio Canguru Flanelado</td>
              <td>R$ 59,90</td>
              <td><div className="add-remove"><AiOutlinePlusCircle />2<AiOutlineMinusCircle /></div></td>
              <td>R$ 119,80</td>
              <td className="fim"><BsTrash /></td>
            </ProductLine>
            <ProductLine>
              <td className="inicio"><img src="http://http2.mlstatic.com/D_630697-MLB43323294123_082020-O.jpg" /></td>
              <td>Moletom Masculino Cobra Kai Canguru Sport Serie Academia</td>
              <td>R$ 77,00</td>
              <td><div className="add-remove"><AiOutlinePlusCircle />4<AiOutlineMinusCircle /></div></td>
              <td>R$ 308,00</td>
              <td className="fim"><BsTrash /></td>
            </ProductLine>
          </Products>
        </TableCart>
        <div>
          <Frete>
            <h2>Calcule frete e prazo</h2>
            <input type="number" /><button>Buscar</button>
            <p className="dontknow">Não sei meu CEP</p>
            <p className="options">Opções de frete:</p>
            <div className="options-box">
              <p>Digite seu CEP para consultar.</p>
            </div>
          </Frete>
          <Resumo>
            <h2>Resumo do pedido</h2>
            <div>
              <span>7 produtos</span>
              <span>R$607.75</span>
            </div>
            <div>
              <span>desconto</span>
              <span>R$5,00</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$602,75</span>
            </div>
            <button>Finalizar compra</button>
          </Resumo>
        </div>
      </Container>
    </>
  );
}

export default Cart;
