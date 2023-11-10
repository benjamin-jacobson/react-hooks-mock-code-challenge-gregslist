import React from "react";
import { useState } from "react";

function Search({handleSearchFilter}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    handleSearchFilter(searchTerm)
    setSearchTerm("")
  }

  const [searchTerm, setSearchTerm] = useState("")
  function updatedSearchTerm(x){
    setSearchTerm(x)
    console.log(searchTerm)
  }
  

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => updatedSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
