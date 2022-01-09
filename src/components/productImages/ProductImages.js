import React, { useState } from "react";
import "./productImages.scss";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  console.log();

  return (
    <section>
      <div className="main__image">
        <img src={main.url} alt="main single product photograph" />
      </div>
      <div className="gallery">
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
    </section>
  );
};

export default ProductImages;
