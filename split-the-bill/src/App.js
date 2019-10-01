import React from 'react';
import './App.css';
import TabNav from './TabNav';
import { Route } from 'react-router-dom';
import Onboarding from './onboard';
import TipCalculator from './tip-calculator';
import Invite from './Invite';
import Paid from './PaidOrNot';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>Split the Bill</h1>
      <TabNav />
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Onboarding}/>
      <Route exact path='/calculator' component={TipCalculator}/>
      <Route exact path='/invite' component={Invite}/>
      <Route exact path='/paid' component={Paid}/>      
    </div>
  );
}

export default App;
