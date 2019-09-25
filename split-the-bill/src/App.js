import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import TipCalculator from './tip-calculator/';
import Invite from './Invite';
import Paid from './PaidOrNot';


function App() {
  return (
    <div className="App">
      <h1>Split the Bill</h1>
      <Login />
      <h1>Or</h1>
      <SignUp />
    
      <TipCalculator />
      <Invite />

      <Paid />
    </div>
  );
}

export default App;
