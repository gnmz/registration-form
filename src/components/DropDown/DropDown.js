import React, { Component } from "react";
import DropDownHeader from "./DropDownHeader";
import "./DropDown.css";

export class DropDown extends Component {
  state = {
    isOpen: false,
    isChoosenOption: false,
    defaultOptionValue: "Язык",
  };
  toggling = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({ isOpen: false });
    } else if (!isOpen) {
      this.setState({ isOpen: true });
    }
  };
  onOpionClicked = (option) => {
    let getLanguage = this.props.getLanguage;
    if (!this.state.isChoosenOption) {
      this.setState(
        {
          isChoosenOption: true,
          defaultOptionValue: option,
          isOpen: false,
        },
        () => {
          getLanguage(this.state.defaultOptionValue);
        }
      );
    } else if (this.state.isChoosenOption) {
      this.setState({ defaultOptionValue: option, isOpen: false }, () => {
        getLanguage(this.state.defaultOptionValue);
      });
    }
  };
  render() {
    const { options } = this.props;
    const { defaultOptionValue, isOpen } = this.state;
    return (
      <label
        className="registration-form-form-languages"
        htmlFor="drop-down-header"
      >
        <span className="registration-form-form-languages__title">Язык</span>
        {!isOpen ? (
          <DropDownHeader
            className="drop-down-container"
            value={defaultOptionValue}
            onClick={this.toggling}
          />
        ) : (
          <DropDownHeader
            className="drop-down-container-active"
            value={defaultOptionValue}
            onClick={this.toggling}
          />
        )}

        {isOpen ? (
          <ul className="drop-down-list">
            {options.map((option) => (
              <li
                key={option}
                className="drop-down-list__item"
                onClick={() => {
                  this.onOpionClicked(option);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        ) : null}
      </label>
    );
  }
}

export default DropDown;
