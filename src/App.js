import './App.css';
import { useState } from 'react';


function App (){

  const [txt,seTtxt]=useState(0);
  

  const incValue=()=>{
   seTtxt(txt+1);
  }
  const dccValue=()=>{
    seTtxt(txt-1);
   }
   const dfValue=()=>{
    seTtxt(0);
   }
  return(
  <div className='App'>
    
    <button onClick={incValue} ><h1>Increase</h1></button>
    <button onClick={dccValue}><h1>Decrease</h1></button>
    <button onClick={dfValue}><h1>setZero</h1></button>
    {txt}
    </div>
   

  );
}





export default App;
