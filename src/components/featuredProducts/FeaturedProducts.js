import React from "react";
import Loading from "../loading/Loading";
import { useProductsContext } from "../../context/products_context";
// import { Link } from "react-router-dom";
import Error from "../error/Error";
import Product from "../product/Product";

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
    <section>
      <h1>Featured Products</h1>
      <main>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </main>
    </section>
  );
};

export default FeaturedProducts;
