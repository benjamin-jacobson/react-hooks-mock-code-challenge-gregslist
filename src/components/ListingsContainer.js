import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({data, handleDeleteItem}) {

  const allListings = data.map(
    (record) =>
      <ListingCard data={record} handleDeleteItem={handleDeleteItem}/>
  );

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
