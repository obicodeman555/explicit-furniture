import React from "react";
import Product from "../product/Product";
import "./gridview.scss";

const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <div className="gridview__container">
        {products?.map((product) => {
          console.log(product);
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
