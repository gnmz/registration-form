import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="registration-form-header">
        <h1 className="registration-form-header__title">Регистрация</h1>
        <div className="registration-form-header-item">
          <p className="registration-form-header-item__title">
            Уже есть аккаунт?
          </p>
          <a href="#/" className="registration-form-header-item__link">
            Войти
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
