import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./stars.scss";

const Stars = ({ stars, reviews }) => {
  const starsReview = Array.from({ length: 5 }, (_, index) => {
    const fractionalNumber = index + 0.5;
    const wholeNumber = index + 1;

    return (
      <span>
        {stars >= wholeNumber ? (
          <BsStarFill />
        ) : stars >= fractionalNumber ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="stars__container">
      <div className="stars">{starsReview}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
