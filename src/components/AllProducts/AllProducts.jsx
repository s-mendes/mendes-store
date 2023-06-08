import React, { useContext } from 'react';
import { Container, Filters, ProductList, ProductsContainer } from './styled';
import GlobalContext from '../../contexts/GlobalContext';
import ProductCard from '../ProductCard/ProductCard';
import { FaSearch } from 'react-icons/fa';

function AllProducts() {

  const { products, load } = useContext(GlobalContext);

  return ( 
    <>
      <Container>
        <Filters>
          <div>
            <h2>Gênero</h2>
            <p>Masculino</p>
            <p>Feminino</p>
          </div>
          <div>
            <h2>Categoria</h2>
            <p>Camisetas</p>
            <p>Camisa Polo</p>
            <p>Calças casuais</p>
            <p>Calças Jeans</p>
            <p>Moletons</p>
          </div>
          <div>
            <h2>Tamanho</h2>
            <p>PP</p>
            <p>P</p>
            <p>M</p>
            <p>G</p>
            <p>2G</p>
            <p>3G</p>
            <p>4G</p>
          </div>
          <div>
            <h2>Marca</h2>
            <div className="search">
              <input placeholder="Busca"></input>
              <FaSearch className="icon"/>
            </div>
            <p>Hurley</p>
            <p>Volcon</p>
            <p>New Era</p>
            <p>Rusty</p>
            <p>Hang Loose</p>
            <p>Oakley</p>
            <p>Quiksilver</p>
            <p>D.C. Shoes</p>
            <p>Reserva</p>
            <p>Nike</p>
            <p>Adidas</p>
            <p>Converse</p>
            <p>Vans</p>
            <p>Ride</p>
            <p>Asics</p>
          </div>
          <div>
            <h2>Preço</h2>
            <p>De RS5,00 até R$20,00</p>
            <p>De RS20,00 até R$40,00</p>
            <p>De RS40,00 até R$80,00</p>
            <p>De RS80,00 até R$150,00</p>
            <p>De RS150,00 até R$250,00</p>
            <p>Acima de R$250,00</p>
          </div>
        </Filters>
        <ProductsContainer>
          <h2>Todos os produtos</h2>
          <div className="sort">
            <p>Exibindo todos os XX resultados</p>
            <select>
              <option value="Crescente">Ordernar por preço crescente</option>
              <option value="Decrescente">Ordernar por preço decrescente</option>
            </select>
          </div>

          <ProductList>
            {load || products.map((product) => {
              return (
                <ProductCard  key={product.id} product={product}/>
              );
            })}
          </ProductList>
        </ProductsContainer>
      </Container>
    </>
  );
}

export default AllProducts;
