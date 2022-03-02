import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./productImages.scss";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  const [counter, setCounter] = useState(0);

  let lastIndex = images.length - 1;

  const moveToNextImage = () => {
    setCounter(counter === lastIndex ? 0 : counter + 1);
    setMain(images[counter]);
  };

  const moveToPreviousImage = () => {
    setCounter(counter < 1 ? lastIndex : counter - 1);
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
          <button
            className="sliderToggler sliderToggler--left"
            onClick={moveToPreviousImage}
          >
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
