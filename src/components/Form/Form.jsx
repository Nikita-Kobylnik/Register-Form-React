import React from "react";
import "./Form.scss";
import FormWrapper from "../FormWrapper/FormWrapper";
import Title from "../Title/Title";
import Cancel from "../Cancel/Cancel";

function Form() {
  return (
    <form className="form">
      <Cancel />
      <Title />
      <FormWrapper />
    </form>
  );
}

export default Form;
