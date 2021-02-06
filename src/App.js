import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
