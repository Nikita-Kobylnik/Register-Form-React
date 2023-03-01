import React, { useState } from "react";
import "./PasswordItem.scss";

function PasswordItem({ id, plaseholder }) {
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-item">
      <input
        className="form-item__input-password"
        id={id}
        type={showPassword ? "password" : "text"}
        placeholder={plaseholder}
      />
      <button
        onClick={(e) => {
          togglePassword();
          e.preventDefault();
        }}
        className="view"
      ></button>
    </div>
  );
}

export default PasswordItem;
