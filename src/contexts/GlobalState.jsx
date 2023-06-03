import React, { useEffect, useState }  from 'react';
import { fetchItems } from '../api/mercadoLivreAPI';
import GlobalContext from './GlobalContext';

function GlobalState(props) {
  const [products, setProducts ] = useState([]);
  const [ load, setLoad ] = useState(true);
  const [ search, setSearch ] = useState('');
  const [cart, setCart] = useState([]);
  const [ menuIsVisible, setMenuIsVisible ] = useState(false);
  const [ menuMobileIsVisible, setMenuMobileIsVisible ] = useState(false);
  
  async function getAllProducts() {
    try {
      setLoad(true);
      const products = await fetchItems(search === '' ? 'astronauta' : search);
      const result = await Promise.all(products);
      setProducts(result);
      setLoad(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, [Promise]);

  const data = {
    products,
    load,
    search,
    setSearch,
    cart,
    setCart,
    menuIsVisible,
    setMenuIsVisible,
    menuMobileIsVisible,
    setMenuMobileIsVisible
  };
  return ( 
    <>
      <GlobalContext.Provider value={data}>
        {props.children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
