import React from "react";

export const Button = ({ buttonName, onClick }) => {
  return <button onClick={onClick}>{buttonName}</button>;
};
