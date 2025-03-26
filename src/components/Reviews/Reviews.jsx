import reviews from "../../data/reviews";
import React, { useState, useEffect, useRef } from "react";
import "./Reviews.css";

import SplitType from "split-type";
import gsap from "gsap";

import { BiSolidQuoteLeft } from "react-icons/bi";

const Reviews = () => {
  const [activeReview, setActiveReview] = useState(0);
  const reviewsContainerRef = useRef(null);
  const initialRenderRef = useRef(true);
  const animationInProgressRef = useRef(false);
  const hasInitialSplitRef = useRef(false);

  useEffect(() => {
    if (!hasInitialSplitRef.current && reviewsContainerRef.current) {
      const initialReviewCopy =
        reviewsContainerRef.current.querySelector("#review-copy");
      const initialReviewAuthor =
        reviewsContainerRef.current.querySelector("#review-author");

      if (initialReviewCopy && initialReviewAuthor) {
        new SplitType(initialReviewCopy, {
          types: "lines",
          lineClass: "line",
        });

        new SplitType(initialReviewAuthor, {
          types: "lines",
          lineClass: "line",
        });

        initialReviewCopy.querySelectorAll(".line").forEach((line) => {
          const content = line.innerHTML;
          line.innerHTML = `<span>${content}</span>`;
        });

        initialReviewAuthor.querySelectorAll(".line").forEach((line) => {
          const content = line.innerHTML;
          line.innerHTML = `<span>${content}</span>`;
        });

        hasInitialSplitRef.current = true;
      }
    }
  }, []);

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (animationInProgressRef.current) return;
    animationInProgressRef.current = true;

    const currentReviewItems =
      reviewsContainerRef.current.querySelectorAll(".review-item");
    if (currentReviewItems.length > 0) {
      const currentReview = currentReviewItems[currentReviewItems.length - 1];
      const lineSpans = currentReview.querySelectorAll(".line span");

      gsap.to(lineSpans, {
        yPercent: -110,
        duration: 0.7,
        stagger: 0.05,
        ease: "power4.in",
        onComplete: () => {
          createNewReview();
        },
      });
    }
  }, [activeReview]);

  const createNewReview = () => {
    const newReviewItem = document.createElement("div");
    newReviewItem.className = "review-item";

    newReviewItem.innerHTML = `
      <h4 id="review-copy">${reviews[activeReview].copy}</h4>
      <h4 id="review-author">- ${reviews[activeReview].author}</h4>
    `;

    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.appendChild(newReviewItem);

      const newReviewCopy = newReviewItem.querySelector("#review-copy");
      const newReviewAuthor = newReviewItem.querySelector("#review-author");

      new SplitType(newReviewCopy, {
        types: "lines",
        lineClass: "line",
      });

      new SplitType(newReviewAuthor, {
        types: "lines",
        lineClass: "line",
      });

      const newLineSpans = [];

      newReviewCopy.querySelectorAll(".line").forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
        newLineSpans.push(line.querySelector("span"));
      });

      newReviewAuthor.querySelectorAll(".line").forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
        newLineSpans.push(line.querySelector("span"));
      });

      gsap.set(newLineSpans, { yPercent: 110 });

      gsap.to(newLineSpans, {
        yPercent: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          const reviewItems =
            reviewsContainerRef.current.querySelectorAll(".review-item");
          if (reviewItems.length > 1) {
            for (let i = 0; i < reviewItems.length - 1; i++) {
              reviewItems[i].remove();
            }
          }
          animationInProgressRef.current = false;
        },
      });
    }
  };

  const handleReviewClick = (index) => {
    if (index !== activeReview && !animationInProgressRef.current) {
      setActiveReview(index);
    }
  };

  return (
    <section className="reviews" ref={reviewsContainerRef}>
      <h3 id="quote-icon">
        <BiSolidQuoteLeft />
      </h3>

      <div className="review-item">
        <h4 id="review-copy">{reviews[activeReview].copy}</h4>
        <h4 id="review-author">- {reviews[activeReview].author}</h4>
      </div>

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
