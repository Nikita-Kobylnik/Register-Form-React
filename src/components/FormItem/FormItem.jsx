import React, { useState } from "react";
import "./FormItem.scss";

function FormItem({ onChange, id, type, plaseholder }) {
  // const [value, setValue] = useState("");
  const changeInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form-item">
      <input
        className="form-item__input"
        id={id}
        type={type}
        placeholder={plaseholder}
        onChange={changeInput}
      />
    </div>
  );
}

export default FormItem;
