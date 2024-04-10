 import React from "react";

 const SearchContext = React.createContext({
    searchInput: '',
    updateSearchInput: () => {}
 })

 export default SearchContext