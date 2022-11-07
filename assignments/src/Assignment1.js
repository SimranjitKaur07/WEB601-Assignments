import React, { useState } from 'react';
function App() {
  const [temp, setTemp] = useState(20);
  const [unit, setUnit] = useState('C');
  const [unitChange, setUnitChange] = useState('F');
  const [isCheckedT, setIsCheckedT] = useState("checked");
  const [isCheckedCold, setIsCheckedCold] = useState("");
  const [isCheckedHot, setIsCheckedHot] = useState("");
  const [isCheckedAuto, setIsCheckedAuto] = useState("checked");
  const [currentMode, setCurrentMode] = useState("auto");
  const handleTempInc=()=>{
    if(unit==='C'){
      if(temp===29){
        setIsCheckedHot("checked");
        setIsCheckedCold("");
        setIsCheckedAuto("");
        setCurrentMode("hot");
      }
      if(temp<29){
        setIsCheckedAuto("checked");
        setIsCheckedCold("");
        setIsCheckedHot("");
        setCurrentMode("auto");
      }
      if(temp === 16){
        setIsCheckedCold("checked");
        setIsCheckedHot("");
        setIsCheckedAuto("");
        setCurrentMode("cold");
      }
    }else{
      if(temp===84){
        setIsCheckedHot("checked");
        setIsCheckedCold("");
        setIsCheckedAuto("");
        setCurrentMode("hot");
      }
      if(temp<84){
        setIsCheckedAuto("checked");
        setIsCheckedCold("");
        setIsCheckedHot("");
        setCurrentMode("auto");
      }
      if(temp === 60){
        setIsCheckedCold("checked");
        setIsCheckedHot("");
        setIsCheckedAuto("");
        setCurrentMode("cold");
      }
    }
    setTemp(temp + 1);
  }
  const handleTempDec=()=>{
    if(unit==='C'){
      if(temp===29){
        setIsCheckedHot("checked");
        setIsCheckedCold("");
        setIsCheckedAuto("");
        setCurrentMode("hot");
      }
      if(temp<31){
        setIsCheckedAuto("checked");
        setIsCheckedCold("");
        setIsCheckedHot("");
        setCurrentMode("auto");
      }
      if(temp === 17){
        setIsCheckedCold("checked");
        setIsCheckedHot("");
        setIsCheckedAuto("");
        setCurrentMode("cold");
      }
    }else{
      if(temp===84){
        setIsCheckedHot("checked");
        setIsCheckedCold("");
        setIsCheckedAuto("");
        setCurrentMode("hot");
      }
      if(temp<84){
        setIsCheckedAuto("checked");
        setIsCheckedCold("");
        setIsCheckedHot("");
        setCurrentMode("auto");
      }
      if(temp === 60){
        setIsCheckedCold("checked");
        setIsCheckedHot("");
        setIsCheckedAuto("");
        setCurrentMode("cold");
      }
    }
    setTemp(temp-1);
  }
  const handleTempUnit = ()=>{
    if(unit === 'C'){
      setUnit('F');
      setUnitChange('C');
      setIsCheckedT("");
      setTemp(parseInt(temp * 9 / 5 + 32));
    }else{
      setUnit('C');
      setUnitChange('F');
      setIsCheckedT("checked");
      setTemp(parseInt((temp - 32) * 5 / 9));
    }
  }
  const handleCold = ()=>{
    if (isCheckedCold === "checked") {
      setIsCheckedCold("");
      setIsCheckedHot("");
      setIsCheckedAuto("checked");
      setCurrentMode("auto");
    }else{
      if(unit === 'C'){
        setTemp(16);
      }else{
        setTemp(61);
      }
      setIsCheckedCold("checked");
      setIsCheckedAuto("");
      setIsCheckedHot("");
      setCurrentMode("cold");
    }
  }
  const handleHot = ()=>{
    if (isCheckedHot === "checked") {
      setIsCheckedCold("");
      setIsCheckedHot("");
      setIsCheckedAuto("checked");
      setCurrentMode("auto");
    }else{
      if(unit === 'C'){
        setTemp(30);
      }else{
        setTemp(86);
      }
      setIsCheckedHot("checked");
      setIsCheckedAuto("");
      setIsCheckedCold("");
      setCurrentMode("hot");
    }
  }
  const handleAuto = ()=>{
    if (isCheckedAuto === "checked") {
      setIsCheckedCold("");
      setIsCheckedHot("");
      setIsCheckedAuto("checked");
      setCurrentMode("auto");
    }else{
      if(unit === 'C'){
        setTemp(22);
      }else{
        setTemp(71);
      }
      setIsCheckedAuto("checked");
      setIsCheckedCold("");
      setIsCheckedHot("");
      setCurrentMode("auto");
    }
  }
  return (
    <div>
      <h1 className='heading'>Termostat</h1>
      <div className='container'>
        <p className='showTemp'>Temperture {temp}{unit}</p>
        <p className='showMode'>Current Mode : {currentMode}</p>
      </div>
      <div className='btn-container'>
        <button className='btn' onClick={handleTempInc}>Increase</button>
        <button className='btn' onClick={handleTempDec}>Decrease</button>
      </div>
      <div className='toggle-container'>
        <label className='switch'>
          <input type='checkbox' checked={isCheckedCold} onChange={handleCold}/>
          <span className='slider round'></span>
          <p>Cold</p>
        </label>
        <label className='switch'>
          <input type='checkbox' checked={isCheckedHot} onChange={handleHot}/>
          <span className='slider round'></span>
          <p>Hot</p>
        </label>
        <label className='switch'>
          <input type='checkbox' checked={isCheckedAuto} onChange={handleAuto}/>
          <span className='slider round'></span>
          <p>Auto</p>
        </label>
      </div>
      <div className='toggle-container2'>
        <label className='switch'>
          <input type='checkbox' checked ={isCheckedT} onChange={handleTempUnit}/>
          <span className='slider round'></span>
        </label>
      </div>
      <p className='unitP'>Convert to {unitChange}</p>
    </div>
  );
}

export default App;
