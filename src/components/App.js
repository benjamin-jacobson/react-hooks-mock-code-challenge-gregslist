import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] =useState([])

  // Get the listings
  useEffect(
    () => {
    console.log("i ran");
    getData();
  }, []
  );

  function getData() {
    const url = "http://localhost:6001/listings"
    fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data))
  }

  // 3  can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.

  // 4 I can search for listings by their name.
  function handleSearchFilter(d){

    function filterByDescription(item) {
      if (item.description.includes(d)) {
        return true;
      }
      return false;
    }
    
    //console.log(d)
    if (d !== "") {
    const dataFilteredBySearch = data.filter(filterByDescription);
    setData(dataFilteredBySearch)} 
    else {
      //console.log("usual dataa for empty search term")
      getData() // probably better way to do this with useEffect OR saving the origin on load
    }
  }

  function handleDeleteItem(dd){

    function deleteById(item){
      if (item.id === dd) {
        return false;
      }
      return true;
    }

    const dataFilteredByDelete = data.filter(deleteById)
    console.log("I delete stuff")
    console.log(dd)
    setData(dataFilteredByDelete)}
    

  return (
    <div className="app">
      <Header handleSearchFilter={handleSearchFilter} />
      <ListingsContainer data={data} handleDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;

// App
    // -- Header
            // -- Search
    // -- ListingsContainer
            // -- Listing Cards