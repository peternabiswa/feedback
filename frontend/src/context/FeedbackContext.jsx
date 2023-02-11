import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const fetchFeedback = async () => {
    try {
      console.log("Fetching data from db");
      const { data } = await axios("http://localhost:4000/feedbacks");
      console.log(data);

      setFeedback(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedbackFromDB = (id) => {
    fetch(`http://localhost:4000/feedbacks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const updateFeedback = () => {
    fetch("http://localhost:4000/feedbacks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const createFeedback = (newFeedback) => {
    fetch("http://localhost:4000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
  };

  function deleteFeedback(clickedId) {
    // console.log(`You clicked on ${item.text} with id ${item.id}`);
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((actualItem) => actualItem.id !== clickedId));
      deleteFeedbackFromDB(clickedId);
    }
  }

  function addFeedback(newFeedback) {
    setFeedback([...feedback, newFeedback]);
  }

  useEffect(() => {
    console.log("Running useEffect Hook");
    fetchFeedback();
  }, []);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        createFeedback,
        setFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
