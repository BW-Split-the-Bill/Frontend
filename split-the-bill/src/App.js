import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <h1>Split the Bill</h1>
      <Login />
      <h1>Or</h1>
      <SignUp/>
    </div>
  );
}

export default App;
