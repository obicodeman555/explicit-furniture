import React, { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import "./productImages.scss";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let lastIndex = images.length - 1;

    if (counter < 0) {
      setCounter(lastIndex);
    }

    if (counter > lastIndex) {
      setCounter(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

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
            type="button"
            className="sliderToggler sliderToggler--left"
            onClick={() => {
              setCounter((counter) => counter - 1);
              setMain(images[counter]);
            }}
          >
            <FcPrevious />
          </button>
          <button
            type="button"
            className="sliderToggler sliderToggler--right"
            onClick={() => {
              setCounter((counter) => counter + 1);
              setMain(images[counter]);
            }}
          >
            <FcNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
