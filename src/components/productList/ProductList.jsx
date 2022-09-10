import React from "react";
import Product from "../product/Product";
import { products } from "../../data";

import "./ProductList.css";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Hello, Arman</h1>
                <p className="pl-desc">This is creative portfolio</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img}link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
