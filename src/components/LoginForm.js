import React, { Component } from "react";
import "./LoginForm.css";

class LoginForm extends Component {
  state = { name: "", password: "" };

  handleInput = ({target}) => {
    const {name: key, value} = target;
    this.setState({ [key]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
    <form className="form-example" onSubmit={this.onSubmit}>
      <div className="form-example">
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" required onChange={ this.handleInput }/>
      </div>
      <div className="form-example">
        <label htmlFor="password">Enter your email: </label>
        <input type="password" name="password" id="password" required onChange={ this.handleInput }/>
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
    </form>)
  }
}

export default LoginForm;