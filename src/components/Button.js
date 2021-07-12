import React from "react";

const Button = (props) => {
  const { mode, handleButton } = props;

  return (
    <div className="btn-container">
      <button id="btn-submit" onClick={handleButton}>{mode}</button>
    </div>
  );
}

export default Button;