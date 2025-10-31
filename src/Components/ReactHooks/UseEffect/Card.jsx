import React from "react";

function Card({ product }) {
  return (
    <div id="Card"
>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 60) + "..."}</p>
      <strong> price: {product.price}</strong>
      <h4>rating: {product.rating.rate}</h4>
      <div style={{paddingTop:10,}}>
         <button id="button">Buy Now</button>
         <button id="button">Add to Cart Now</button>
      </div>
     
    </div>
  );
}
export default Card;
