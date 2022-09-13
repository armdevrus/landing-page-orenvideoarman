import React from "react";
import "./Product.css";

const Product = ({ img, link, name, desc }) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="img" className="p-img" />
      </a>
      <h5 className="p-title">{name}</h5>
      <h5 className="p-title">{desc}</h5>
    </div>
  );
};

export default Product;
