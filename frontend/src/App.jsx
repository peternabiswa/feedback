import { useEffect, useState } from "react";
import Card from "./components/common/Card";
import Header from "./components/common/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  return (
    <div className="container">
      <Header />
      <FeedbackForm />
      <FeedbackList />
      <FeedbackStats />
    </div>
  );
}
export default App;
