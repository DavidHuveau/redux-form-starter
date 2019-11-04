import React from 'react';

const ReduxInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>
      {label}
    </label>
    <input {...input} type={type} placeholder={label}/>
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </div>
);

export { ReduxInput };