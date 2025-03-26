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
  const isFirstClickRef = useRef(true);

  // Setup on first render
  useEffect(() => {
    if (reviewsContainerRef.current) {
      // Get the initial review elements
      const initialReviewItem =
        reviewsContainerRef.current.querySelector(".review-item");
      const initialReviewCopy = initialReviewItem.querySelector("#review-copy");
      const initialReviewAuthor =
        initialReviewItem.querySelector("#review-author");

      // Apply split text to initial elements
      if (initialReviewCopy && initialReviewAuthor) {
        new SplitType(initialReviewCopy, { types: "lines", lineClass: "line" });
        new SplitType(initialReviewAuthor, {
          types: "lines",
          lineClass: "line",
        });

        // Wrap content in spans
        initialReviewCopy.querySelectorAll(".line").forEach((line) => {
          line.innerHTML = `<span>${line.innerHTML}</span>`;
        });

        initialReviewAuthor.querySelectorAll(".line").forEach((line) => {
          line.innerHTML = `<span>${line.innerHTML}</span>`;
        });
      }
    }
  }, []);

  // Handle review changes
  useEffect(() => {
    // Skip on first render
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    // Prevent multiple animations from running simultaneously
    if (animationInProgressRef.current) return;
    animationInProgressRef.current = true;

    const container = reviewsContainerRef.current;
    if (!container) return;

    // Get the current review item
    const currentReviewItem = container.querySelector(".review-item");
    if (!currentReviewItem) {
      animationInProgressRef.current = false;
      return;
    }

    // Animate out the current review
    const currentSpans = currentReviewItem.querySelectorAll(".line span");
    gsap.to(currentSpans, {
      yPercent: -110,
      duration: 0.7,
      stagger: 0.05,
      ease: "power4.in",
      onComplete: () => {
        // When animation completes, create the new review
        const newReviewItem = document.createElement("div");
        newReviewItem.className = "review-item";
        newReviewItem.innerHTML = `
          <h4 id="review-copy">${reviews[activeReview].copy}</h4>
          <h4 id="review-author">- ${reviews[activeReview].author}</h4>
        `;

        // Add new review to container
        container.appendChild(newReviewItem);

        // Get new review elements
        const newReviewCopy = newReviewItem.querySelector("#review-copy");
        const newReviewAuthor = newReviewItem.querySelector("#review-author");

        // Apply split text to new elements
        new SplitType(newReviewCopy, { types: "lines", lineClass: "line" });
        new SplitType(newReviewAuthor, { types: "lines", lineClass: "line" });

        // Collect all line spans
        const newLineSpans = [];
        newReviewCopy.querySelectorAll(".line").forEach((line) => {
          line.innerHTML = `<span>${line.innerHTML}</span>`;
          newLineSpans.push(line.querySelector("span"));
        });
        newReviewAuthor.querySelectorAll(".line").forEach((line) => {
          line.innerHTML = `<span>${line.innerHTML}</span>`;
          newLineSpans.push(line.querySelector("span"));
        });

        // Set initial position of new spans
        gsap.set(newLineSpans, { yPercent: 110 });

        // Animate in the new review
        gsap.to(newLineSpans, {
          yPercent: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power4.out",
          onComplete: () => {
            // Remove old review items
            const reviewItems = container.querySelectorAll(".review-item");
            if (reviewItems.length > 1) {
              currentReviewItem.remove();
            }
            animationInProgressRef.current = false;
            isFirstClickRef.current = false;
          },
        });
      },
    });
  }, [activeReview]);

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
