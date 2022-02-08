import React from "react";
import gear1x from "../../assets/gear_1x.svg";
import gear2x from "../../assets/gear_2x.svg";
import "./loading.scss";

// import { useProductsContext } from "../../context/products_context";

const Loading = () => {
  return (
    <div className="loading">
      <div className="gears">
        <div className="rotating__gear">
          <img src={gear1x} alt="smaller gear icon for loading" />
        </div>
        <div className="rotating__gear">
          <img src={gear2x} alt="smaller gear icon for loading" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
