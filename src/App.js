import React from 'react';
import './App.css';
import SigninContainer from './containers/SigninContainer';

const onSubmit = values => {
  console.log('Form data: ', values);
};

const App = () => {
  return (
    <div className="App">
      <SigninContainer onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
