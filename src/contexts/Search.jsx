import { createContext, useState } from 'react';

const Search = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <Search.Provider value={[search, setSearch]}>{children}</Search.Provider>
  );
};

export { Search };
export default SearchProvider;
