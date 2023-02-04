import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { FeedbackContext } from "../context/FeedbackContext";
import Card from "./common/Card";
import styles from "./Feedback.module.css";

function Feedback({ item }) {
  const deleteFeedback = useContext(FeedbackContext);
  function handleDelete() {
    deleteFeedback(item.id);
  }
  return (
    <Card bgColor="white">
      <h2>{item.text}</h2>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleDelete} className="close">
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}

export default Feedback;
