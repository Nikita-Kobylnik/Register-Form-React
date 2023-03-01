import React, { useState } from "react";
import "./FormWrapper.scss";
import FormItem from "../FormItem/FormItem";
import Register from "../Register/Register";
import PasswordItem from "../PasswordItem/PasswordItem";

function FormWrapper() {
  const [inp, setInp] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const onChangeValue = (val) => {
    setInp(val);
  };

  console.log(inp);

  return (
    <div className="form-wrapper">
      <FormItem
        onChange={onChangeValue}
        id={"name"}
        type={"text"}
        plaseholder={"Name"}
      />
      <FormItem
        onChange={onChangeValue}
        id={"surname"}
        type={"text"}
        plaseholder={"Surname"}
      />
      <FormItem
        onChange={onChangeValue}
        id={"email"}
        type={"email"}
        plaseholder={"Email"}
      />
      <PasswordItem id={"password"} plaseholder={"Password (6+ characters)"} />
      <PasswordItem id={"confirm"} plaseholder={"Confirm password"} />
      <Register />
    </div>
  );
}

export default FormWrapper;
