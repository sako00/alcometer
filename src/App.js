import React, { useState } from 'react';
import './App.css';



function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(){
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      result = gramsLeft / (weight * 0.6);
    }
    if (result < 0) {
      result = 0;
    }
    setResult(result.toFixed(1));
  };

  return (
    <div>
      <h3>Alcometri</h3>
      <label>Weight</label>
      <input
        type="number"
        placeholder="Weight (in kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div>
        <label>Bottles</label>
      <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      <div>
        <label>Time</label>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      </div>
      
      <div>
      <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
