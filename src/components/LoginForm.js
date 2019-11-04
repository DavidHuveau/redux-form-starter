import React, { Component } from "react";
import "./LoginForm.css";
import { Field } from "redux-form";
import { ReduxInput } from "./controls";

const LoginForm = props => {
  const { onSubmit, handleSubmit } = props;
  return (
    <form className="form-example" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <Field name="status" component={ReduxInput} type="text" label="Status"/>
      <button type="submit">Subscribe!</button>
    </form>
  );
};

export default LoginForm;
