import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <h1>ERROR!</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

export default ErrorMessage;