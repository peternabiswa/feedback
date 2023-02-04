import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
// import { feedbackData } from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  return (
    <div className="container">
      <Header text="Feedback App" />
      <FeedbackForm addFeedback={addFeedback} createFeedback={createFeedback} />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      <FeedbackStats feedback={feedback} />
    </div>
  );
}
export default App;
