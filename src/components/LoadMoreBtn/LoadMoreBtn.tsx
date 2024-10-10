import React from "react";

import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  text?: String;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  onClick,
  text = "Load more...",
}) => {
  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.btn}>
        {text}{" "}
      </button>
    </div>
  );
};

export default LoadMoreBtn;