//imports
import "./productList.scss";
import React from "react";
import { useFilterContext } from "../../context/filter_context";
import GridView from "../gridView/GridView";
import ListView from "../listView/ListView";

//function react component
const ProductsList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <div className="productNotFound">
        <div>
          <img
            src="https://media.istockphoto.com/vectors/document-checking-agreement-or-contract-validation-financial-or-vector-id1323644656?k=20&m=1323644656&s=612x612&w=0&h=aErfr_AfcxKziNBMqSVGAf58je5rGLHQuiKspiEZYcA="
            alt=""
          />
        </div>
        <div>Sorry no product found at the moment</div>
      </div>
    );
  }

  //show list view if grid view is false
  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
};

export default ProductsList;
