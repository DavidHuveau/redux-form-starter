import React, { Component } from "react";
import "./LoginForm.css";
import { Field } from 'redux-form';
// import { ReduxInput } from './controls';
import { reduxForm } from 'redux-form';

const LoginForm = () => {
  return (
    <form className="form-example">
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
      {/* <div className="form-example">
      <label htmlFor="name">Enter your name:</label>
      <input type="text" name="name" id="name" required onChange={ this.handleInput }/>
    </div>
    <div className="form-example">
      <label htmlFor="password">Enter your password: </label>
      <input type="password" name="password" id="password" required onChange={ this.handleInput }/>
    </div>
    <div className="form-example">
      <input type="submit" value="Subscribe!" />
    </div> */}
    </form>)
}

// export default LoginForm;
export default reduxForm({
  form: 'formname'
})(LoginForm);