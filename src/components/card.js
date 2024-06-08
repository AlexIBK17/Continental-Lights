import React from "react";
// import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import "../styles/card.css";
const Card = ({ product }) => {
  // const { products } = useProductContext();
  const { _id, title, price, imageURL, catigory } = product;

  return (
    <div className="card product-card">
      <Link to={`/prods/${catigory}/${_id}`}>
        <div className="card-body product-link">
          <img className="imgCard" src={imageURL} alt={title} />
          <div className="product-title">{title}</div>
          <div className="product-price">{price}</div>
        </div>
      </Link>
      {/* <button className="card-btn">Add to Cart</button> */}
    </div>
  );
};
export default Card;
