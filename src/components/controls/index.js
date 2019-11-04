import React from 'react';

const ReduxInput = ({ input, label, type, meta: { touched, error } }) => (
  // console.log();
  <div>
    <label htmlFor={label}>{label}</label>
    <input {...input} type={type} name={label} />
  </div>
);

  // <Form.Field className={classnames({ error: touched && error })}>
  //   {touched && error && <span className="error">{error.message}</span>}
  //   <Form.Input {...input} placeholder={label} type={type} />
  // </Form.Field>

  export { ReduxInput };