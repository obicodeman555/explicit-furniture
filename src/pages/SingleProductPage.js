import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./singleProduct.scss";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  //return to homepage of there is an error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <section className="singleProduct">
      <div className="products__link">
        <Link to="/products">
          <BsArrowLeft />
          <span>back to products</span>
        </Link>
      </div>
      <div className="singleProduct__container">
        <div className="product__images">
          <ProductImages images={images} />
        </div>
        <div className="singleProduct__details">
          <h3>{name}</h3>
          <Stars stars={stars} reviews={reviews} />
          <h5>{formatPrice(price)}</h5>
          <p className="singleProduct__desc">{description}</p>
          <p className="singleProduct__availability">
            <span className="blue-variant fw-500">Available:</span>
            <span>{stock > 0 ? "in stock" : "out of stock"}</span>
          </p>
          <p className="singleProduct__info">
            <span>
              <span className="blue-variant fw-500">Brand:</span>
              <span>{company}</span>
            </span>
            <span>
              <span className="blue-variant fw-500">SKU:</span>
              <span>{sku}</span>
            </span>
          </p>

          <div>{stock > 0 && <AddToCart product={product} />}</div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
