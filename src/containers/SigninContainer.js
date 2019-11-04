import React from 'react';
import { reduxForm } from 'redux-form';
import LoginForm from '../components/LoginForm';

// Decorate the form component
const SigninContainer = reduxForm({
  form: "LoginForm" // a unique name for this form
})(props => <LoginForm {...props} />);

export default SigninContainer;