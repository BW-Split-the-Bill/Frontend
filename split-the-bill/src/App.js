import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import TabNav from './TabNav';

function App() {
  return (
    <div className="App">
      <h1>Split the Bill</h1>
      <Login />
      <h1>Or</h1>
      <SignUp />

      <TabNav />
    </div>
  );
}

export default App;
