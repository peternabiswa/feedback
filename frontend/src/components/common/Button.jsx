import React from "react";
import styles from "./Button.module.css";

function Button({ children, isDisabled }) {
  return (
    <button disabled={isDisabled} className="btn">
      {children}
    </button>
  );
}

export default Button;
