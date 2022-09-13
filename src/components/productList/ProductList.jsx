import React from "react";
import Product from "../product/Product";
import { products } from "../../data";

import "./ProductList.css";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h3 className="pl-title">Моё оборудование</h3>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} name={item.name} desc={item.desc} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
