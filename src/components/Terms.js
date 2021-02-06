import React, { Component } from "react";

export class Terms extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <div className="terms">
        <input
          type="checkbox"
          className="terms-checkbox"
          checked={checked}
          onChange={onChange}
          id="checkbox"
        />
        <label htmlFor="checkbox" className="terms-item">
          Принимаю{" "}
          <a className="terms-link" href="#/">
            условия
          </a>{" "}
          использования
        </label>
      </div>
    );
  }
}

export default Terms;
