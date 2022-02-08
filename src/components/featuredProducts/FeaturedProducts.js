import React from "react";
import Loading from "../loading/Loading";
import { useProductsContext } from "../../context/products_context";
// import { Link } from "react-router-dom";
import Error from "../error/Error";
import Product from "../product/Product";
import "./featuredProducts.scss";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="featuredProducts">
      <h1>Featured Products</h1>
      <article className="featured__item">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </article>
    </section>
  );
};

export default FeaturedProducts;
