import React from "react";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        stars.push(
          <span key={i}>
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i}>
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
