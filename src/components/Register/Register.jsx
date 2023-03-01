import React, { useState } from "react";
import "./Register.scss";

function Register() {
  const [check, setCheck] = useState(false);

  return (
    <div className="register">
      <label className="register__top">
        <input
          className="register__input"
          type="checkbox"
          onClick={(e) => {
            setCheck(e.target.checked);
          }}
        />
        <span className="checkbox"></span>
        <p className="register__text">
          I agree to <a href="/#">the terms and conditions</a>
        </p>
      </label>
      <button
        disabled={!check}
        className="register__btn"
        onClick={(e) => {
          e.preventDefault();
          console.log("register");
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;
