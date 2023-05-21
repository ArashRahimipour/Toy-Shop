import React from "react";

const Card = ({ item, handleClick }) => {
  const { title, desc, price, pic } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={pic} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{desc}</p>
        <p>Price - ${price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
