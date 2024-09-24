import './App.css';
import React from 'react';
import Button from './components/day-1/Button';
import LoadingButton from './components/day-1/LoadingButton';
import ColorAndVariantBtn from './components/day-1/ColorAndVariantBtn';

function App() {

  return (
    <div className="App">
      <div><Button /></div> <br/>
      <div><LoadingButton /></div> <br/>
      <div><ColorAndVariantBtn/></div>
    </div>
  );
}

export default App;
