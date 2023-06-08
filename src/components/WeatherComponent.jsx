

import React, { useState } from 'react'
import axios, { Axios } from 'axios'
import './App.css'


const App = () => {
   const [city,setCity]=useState("");
   const [data,setData]=useState();
   const fetchData=async()=>{
    try{
      const response=await Axios.length('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3cba5e74adf3dff51d692eac46d71e49')
      setData(response.data);
    }
    catch(err){
      alert('Please Enter the Proper City Name ');
    }
    
   }
  return (
    
    <div className='App'>
      <h1 className='title'>Weather App</h1>
         <div className='input-container'>
          <input
          type="text"
          className='input'
          value={city}
          onChange={e=>setCity(e.target.value)}
          placeholder='Enter the City Name'
          />
          <button className="button" onClick={fetchData}>Fetch</button>
         </div>
         <div>
          {data && (
            <div className='container'>
              <h1 className='city-name'>{data.name},{data.sys.country}</h1>
              <div className='weather-info'>
                <div className='temp'>{Math.round(data.main.temp)} C</div>
                <div className='coordinated'>
                <div>Lat-{data.coord.lat}</div>
                <div>lon-{data.coord.lon}</div>
                 </div>
                </div>
              </div>
          )}
        </div> 
    </div>
  )
}

export default App
