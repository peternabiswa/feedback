import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const totalReviews = feedback.length;
  const averageRating = (
    feedback.reduce((acc, currentValue) => acc + currentValue.rating, 0) /
    totalReviews
  ).toFixed(2);
  return (
    <div className="feedback-stats">
      <h2>{totalReviews} reviews</h2>
      <h2>Average Rating: {averageRating}</h2>
    </div>
  );
}

export default FeedbackStats;
