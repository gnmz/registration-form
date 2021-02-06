import React, { Component } from "react";
import Hint from "./Hint";
export class TextField extends Component {
  render() {
    const { id, placeholder, value, onChange, label, hint } = this.props;
    return (
      <label htmlFor={id} className="registration-form-form-item">
        <span className="registration-form-form-item__title">{label}</span>
        <input
          className="registration-form-form-item__input"
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {hint === null ? <Hint /> : null}
      </label>
    );
  }
}

export default TextField;
