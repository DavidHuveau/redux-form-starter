import React, { Component } from "react";
import "./LoginForm.css";
import { Field } from "redux-form";
import { ReduxInput } from "./controls";

const LoginForm = props => {
  const { onSubmit, handleSubmit } = props;
  return (
    <form className="form-example" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <Field name="firstName" component="input" type="text" placeholder="firstName"/>
      </div>
      <div>
        <label>Last Name</label>
        <Field name="lastName" component="input" type="text" placeholder="lastName"/>
      </div>
      <div>
        <label>Password</label>
        <Field name="password" component="input" type="password" placeholder="password"/>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <Field name="status" component={ReduxInput} type="text" label="Status"/>
      <button type="submit">Subscribe!</button>
    </form>
  );
};

export default LoginForm;
