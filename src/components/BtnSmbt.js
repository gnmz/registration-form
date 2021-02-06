import React, { Component } from "react";

export class BtnSmbt extends Component {
  render() {
    const { btnClass, disabled, onClick } = this.props;
    return (
      <div className="btn-sbmt">
        <button className={btnClass} onClick={onClick} disabled={disabled}>
          Зарегестрироваться
        </button>
      </div>
    );
  }
}

export default BtnSmbt;
