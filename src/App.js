// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    const ageInMilliseconds = today - birthDate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    setAge(years);
  }

  return (
    <div className="App">
      
      <h1>Age Calculator</h1>
      <h4>Enter your birthdate</h4><br></br>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br></br>
      <button class="hi" onClick={calculateAge} >Calculate Age</button>
      {age && <h2>Your are {age} years old.</h2>}
    </div>
  );
}

export default App;
