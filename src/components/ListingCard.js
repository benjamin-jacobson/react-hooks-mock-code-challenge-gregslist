import React, { useState } from "react";

function ListingCard({data, handleDeleteItem}) {

  const description = data.description
  const image = data.image
  const location = data.location

  const [yesFavorite, setYesFavorite] = useState(false)
  function onFavoriteButtonClick() {
      setYesFavorite(() =>!yesFavorite)
  }

  function onDeleteItemClick(e){

    console.log(data.id)

    const url = `http://localhost:6001/listings/${data.id}`
    fetch(
      url,
      {
        method: 'DELETE',
        headers: {'Content-Type':'applications/json'},
        body: null
      })


    // To update the state data in App
    handleDeleteItem(data.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        { yesFavorite ? (
          <button onClick={onFavoriteButtonClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onFavoriteButtonClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onDeleteItemClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
