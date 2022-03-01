import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./productImages.scss";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  const [counter, setCounter] = useState(0);

  const moveToNextImage = () => {
    setCounter((prev) => (prev < images.length ? prev + 1 : prev));
    setMain(images[counter]);
  };

  return (
    <section className="singleProduct__images">
      <div className="singleProduct__galleries">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`gallery__image ${
                image.url === main.url ? "active" : null
              }`}
            />
          );
        })}
      </div>
      <div className="singleProduct__main__image">
        <img src={main.url} alt="main single product photograph" />
        <div className="slideImage__button__container">
          <button className="sliderToggler sliderToggler--left">
            <FcPrevious />
          </button>
          <button
            className="sliderToggler sliderToggler--right"
            onClick={moveToNextImage}
          >
            <FcNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
