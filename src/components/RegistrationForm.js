import React, { Component } from "react";
import BtnSmbt from "./BtnSmbt";
import DropDown from "./DropDown/DropDown";
import Header from "./Header";
import Terms from "./Terms";
import TextField from "./TextField";

export class RegistrationForm extends Component {
  state = {
    languages: ["Русский", "Английский", "Китайский", "Испанский"],
    name: "",
    email: "",
    emailValid: false,
    nameValid: false,
    phone: "",
    chooseLanguage: "",
    isCheckedTerms: false,
  };

  handleSubmit = () => {
    const { name, email, phone, chooseLanguage } = this.state;
    const newUser = {
      name: name,
      email: email,
      phone: phone,
      language: chooseLanguage,
    };
    alert(`Добро пожаловать ${newUser.name}!`);
  };

  getName = (e) => {
    let name = e.target.value;
    this.setState({ name: name });
    if (name && typeof name === "string") {
      const nameValid = new RegExp(
        /^(([a-zA-Z' -]{1,30})|([а-яА-ЯЁё -]{1,30}))$/u
      );
      const match = nameValid.test(name);
      if (match) {
        this.setState({ nameValid: match });
      } else {
        this.setState({ nameValid: null });
      }
    } else {
      this.setState({ nameValid: false });
    }
  };

  getEmail = (e) => {
    let email = e.target.value;
    this.setState({ email: email });
    if (email && email.length >= 0) {
      const emailValid = new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      const match = emailValid.test(email);
      if (match) {
        this.setState({ emailValid: match });
      } else {
        this.setState({ emailValid: null });
      }
    } else {
      this.setState({ emailValid: false });
    }
  };

  getPhone = (e) => {
    let phone = e.target.value;
    this.setState({ phone: phone });
    if (phone) {
      const phoneValid = new RegExp(
        /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/
      );
      const match = phoneValid.test(phone);
      if (match) {
        this.setState({ phoneValid: match });
      } else {
        this.setState({ phoneValid: null });
      }
    } else {
      this.setState({ phoneValid: false });
    }
  };

  getLanguage = (e) => {
    this.setState({ chooseLanguage: e });
  };

  getChecked = () => {
    const { isCheckedTerms } = this.state;
    if (!isCheckedTerms) {
      this.setState({ isCheckedTerms: true });
    }
    if (isCheckedTerms) {
      this.setState({ isCheckedTerms: false });
    }
  };

  render() {
    const {
      languages,
      name,
      email,
      phone,
      nameValid,
      emailValid,
      phoneValid,
      isCheckedTerms,
      defaultOption,
      chooseLanguage,
    } = this.state;
    return (
      <div className="registration-form">
        <Header />
        <TextField
          label="Имя"
          id="name"
          placeholder="Введите ваше имя"
          value={name}
          onChange={this.getName}
          hint={nameValid}
        />
        <TextField
          label="Email"
          id="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={this.getEmail}
          hint={emailValid}
        />
        <TextField
          label="Номер телефон"
          id="phone"
          placeholder="Введите номер телефона"
          value={phone}
          onChange={this.getPhone}
          hint={phoneValid}
        />

        <DropDown
          options={languages}
          defaultOption={defaultOption}
          getLanguage={this.getLanguage}
        />
        <Terms checked={isCheckedTerms} onChange={this.getChecked} />
        {emailValid &&
        nameValid &&
        phoneValid &&
        isCheckedTerms &&
        chooseLanguage.length > 0 ? (
          <BtnSmbt
            btnClass="btn-sbmt-normal"
            disabled={false}
            onClick={this.handleSubmit}
          />
        ) : (
          <BtnSmbt
            btnClass="btn-sbmt-disabled"
            disabled={true}
            onClick={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default RegistrationForm;
