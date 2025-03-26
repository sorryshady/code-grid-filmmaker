import React, { useState } from "react";
import "./Reviews.css";

import reviews from "../../data/reviews";

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const handleReviewClick = (index) => {
    setActiveReview(index);
  };

  return (
    <section className="reviews">
      <h3>"</h3>
      <h4 id="review-copy">{reviews[activeReview].copy}</h4>
      <h4 id="review-author">- {reviews[activeReview].author}</h4>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-thumbnail ${
              index === activeReview ? "active" : ""
            }`}
            onClick={() => handleReviewClick(index)}
          >
            <img src={review.image} alt={`Review by ${review.author}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
