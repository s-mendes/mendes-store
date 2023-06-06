import React, { useContext } from 'react';
import { CardContainer, Discount, FullPrice, Img, Installments, Price, Prices, ProdButton, ProdName } from './product-styled';
import formatCurrency from '../../util/formatCurrency';
import { useNavigate } from 'react-router-dom';
import { goToProduct } from '../../route/coordinator';
import GlobalContext from '../../contexts/GlobalContext';


function ProductCard(props) {

  const { product } = props;
  const navigate = useNavigate();
  const { setSimilar } = useContext(GlobalContext);

  return ( 
    <>
      <CardContainer onClick={() => {
        setSimilar(product.title);
        goToProduct(navigate, product.id);
      }}>
        <div className="image">
          <Img src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}/>
        </div>
        <div className="description">
          {product.installments.rate ? (<Discount>{product.installments.rate}% OFF</Discount>) : (<></>)}
          <ProdName>{product.title}</ProdName>
          {product.installments.rate ? 
            (<Prices>
              <FullPrice>{formatCurrency(product.installments.quantity*product.installments.amount)}</FullPrice>
              <Price>{formatCurrency(product.price)}</Price>
            </Prices>) :
            (<Price>{formatCurrency(product.price)}</Price>)}
          
          <Installments>ou até {product.installments.quantity}x de {formatCurrency(product.installments.amount)}</Installments>
          <ProdButton>Ver produto</ProdButton>
        </div>
      </CardContainer>
    </>
  );
}

export default ProductCard;
