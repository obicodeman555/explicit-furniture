import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import { Loading, Error, AddToCart, ProductImages, Stars } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  //fecth single product pertaining to given id
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  //return to homepage of there is an error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  //destructing properties for single product
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <section>
      <div>
        <Link to="/products">back to products</Link>
      </div>
      <div className="product__images">
        <ProductImages images={images} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <Stars stars={stars} reviews={reviews} />
        <h5>{formatPrice(price)}</h5>
        <p>{description}</p>
        <p className="info">
          <span>Available:</span>
          {stock > 0 ? "in stock" : "out of stock"}
        </p>
        <p className="info">
          <span>Brand:</span>
          {company}
        </p>
        <div className="singleProduct__addToCart">
          {stock > 0 && <AddToCart />}
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
