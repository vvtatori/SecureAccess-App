import React from "react";

//Using an interface to describe the button prop - for submit or buttons
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

//The button component as a functional component using the interface for its props
const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button" }) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
