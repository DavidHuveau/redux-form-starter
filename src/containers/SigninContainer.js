import React from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from '../components/LoginForm';

const validate = values => {
  const errors = {}
  if (!values.status) {
    errors.status = "Required";
  } else if (values.status.length < 5) {
    errors.status = "Must be 5 characters or more";
  }
  return errors
}

// Decorate the form component
const SigninContainer = reduxForm({
  form: "LoginForm", // a unique name for this form
  validate
})(props => <LoginForm {...props} />);

export default SigninContainer;