import React, { useState } from 'react';
import axios from 'axios'


function App() {

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=Lalitpur,NPL&appid=3560d73d48aae239fd5f3e6ace085a23`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Kathmandu</p>
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="descriptions">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
