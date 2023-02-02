import React, { useState } from 'react'; 
import './App.css';

function App() {

  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e){
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let alcosum = 0;
    if (gender === 'male'){
      alcosum = gramsLeft / (weight * 0.7);
    }
    else if(gender === 'female'){
      alcosum = gramsLeft / (weight* 0.6);
    }
    if(alcosum<0){
      alcosum=0;
    }
    setResult(alcosum.toFixed(2));
  }

  return (
    <>
   <h3>Alcometer</h3>
   <form onSubmit={handleSubmit}>
    <div>
      <label>Weight</label>
      <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
    </div>
    <div>
      <label>Bottles</label>
      <input name="bottless" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      
    </div>
    <div>
    <label>Time</label>
    <input name="time" type="number" step="1" value={time} onChange={e => setTime(e.target.value)}></input>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
      <output>{result.toFixed(0)}</output>
    </div>
    <button onClick={handleSubmit}>Calculate</button>
   </form>
   </>
  );
}

export default App;

  