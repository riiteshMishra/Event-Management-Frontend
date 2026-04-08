import React from "react";

const Button1 = ({
  text = "Button",
  icon,
  onClick,
  className = "",
  iconClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bookmarkBtn flex items-center ${className}`}
    >
      {icon && (
        <span className={`IconContainer ${iconClass}`}>
          {icon}
        </span>
      )}

      <p className="text">{text}</p>
    </button>
  );
};

export default Button1;