import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import Spinner from "./common/Spinner";
import Feedback from "./Feedback";

function FeedbackList() {
  // 0, '', undefined, null, false, NaN

  const { feedback, deletefeedback } = useContext(FeedbackContext);
  console.log(feedback);
  console.log(feedback.length);

  // Validate feedback with PropTypes
  return (
    <div>
      {feedback && typeof feedback !== "string" && feedback.length ? (
        feedback.map((item) => <Feedback key={item.id} item={item} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default FeedbackList;
