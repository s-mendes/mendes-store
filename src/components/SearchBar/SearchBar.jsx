import React, { useContext } from 'react';
import { Form } from './search-styled';
import { FaSearch } from 'react-icons/fa';
import GlobalContext from '../../contexts/GlobalContext';

function SearchBar () {

  const { getAllProducts, search, setSearch } = useContext(GlobalContext);

  function searchProduct (e) {
    e.preventDefault();
    setSearch(search);
    getAllProducts();
  }

  return (
    <Form  onSubmit={searchProduct}>
      <input 
        type="search" 
        value={search}
        placeholder="O que você está procurando?" 
        onChange={({ target }) => setSearch(target.value)}
        required 
      />
      <button type="submit">
        <FaSearch />
      </button>
    </Form>
  );
}

export default SearchBar;
