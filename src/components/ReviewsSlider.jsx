import React from "react";
import { useTranslation } from "react-i18next";

const ReviewsSlider = () => {
  const { t } = useTranslation();
  const reviews = t("reviews_list", { returnObjects: true });

  return (
    <div className="review-slider-container">
      <div className="review-grid">
        {reviews.map((review, i) => (
          <div className="review-card" key={i}>
            <div className="review-card-text">“{review.text}”</div>
            <div className="review-card-name">{review.name}</div>
            <div className="review-card-role">{review.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
