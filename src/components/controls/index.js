import React from 'react';

const ReduxInput = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-example">
    <label htmlFor={label}>{label}</label>
    {touched && error && <span className="error">{error.message}</span>}
    <input type={type} name={label} id={label} required/>
  </div>
);

  // <Form.Field className={classnames({ error: touched && error })}>
  //   {touched && error && <span className="error">{error.message}</span>}
  //   <Form.Input {...input} placeholder={label} type={type} />
  // </Form.Field>

  export { ReduxInput };