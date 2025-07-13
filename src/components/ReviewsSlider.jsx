import React from "react";
import { useTranslation } from "react-i18next";

const splitToColumns = (arr, columns = 2) => {
  const result = Array.from({ length: columns }, () => []);
  arr.forEach((item, i) => {
    result[i % columns].push(item);
  });
  return result;
};

const ReviewsSlider = () => {
  const { t } = useTranslation();
  const reviews = t("reviews_list", { returnObjects: true });
  const columns = splitToColumns(reviews, 2);

  return (
    <div className="review-slider-container main_block">
      <h1 style={{ width: "100%", textAlign: "left" }}> // REVIEWS</h1>
      <div className="review-grid">
        {columns.map((col, colIdx) => (
          <div className="review-column" key={colIdx}>
            {col.map((review, i) => (
              <div className="review-card" key={i}>
                <div className="review-card-name">
                  <p style={{ fontSize: "large" }}>~ {review.name} ~</p>
                </div>
                <div className="review-card-text">“{review.text}”</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
