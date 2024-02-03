import { useState } from 'react'
import './App.css'


function App() {
  const [celsius,setCelsius]=useState('');
  const [fahrenheit,setFahrenheit]=useState('')
   
  const handleCelsiusChange=(e)=>{
    const value = e.target.value
     setCelsius(value);
     setFahrenheit(celsiusToFahrenheit(value))

  };
  const handleFahrenheitChange=(e)=>{
    const value=e.target.value
    setFahrenheit(value);
    setFahrenheit(fahrenheitToCelsius(value))
  }

  const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };
  const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5/9;
  };

  return (
    <div>
      <div className='celsius'>
         <label >celsius</label>
         <input 
          type='number'
          value={celsius}
          onChange={handleCelsiusChange}
          
         />
      </div>
      
      <div className='fahrenheit'>
         <label >fahrenheit</label>
         <input 
          type='number'
          value={fahrenheit}
          onChange={handleFahrenheitChange}

         />
      </div>
    </div>
  )
}

export default App
