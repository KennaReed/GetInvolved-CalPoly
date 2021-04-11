import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
	
  return (
    <>
     <SearchBar 
       input={input} 
      />
    </>
   );
}

export default SearchPage