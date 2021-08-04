import React, { useState } from "react";
import './App.css';

export default function WeatherTemperature(props){
const [unit, setUnits] = useState("fahrenheit");

function displayCelsius(event){
  event.preventDefault();
  setUnits("celsius");
}

function displayFahrenheit(event){
  event.preventDefault();
  setUnits("fahrenheit");
}

function celsius(){
  return((props.data.temperture -32)*(5/9));
}

if (unit === "fahrenheit"){
return(
    <div>  
        <img src={props.data.icon} alt={props.data.description} id="current-icon" />
            <strong id="temperature">{props.data.temperture}</strong>
                <span className="units">
                  <a href="/" id="fahrenheit-link" className="active">
                    °F
                  </a>{" "}
                  |
                  <a href="/" id="celsius-link" onClick={displayCelsius}>
                    °C{" "}
                  </a>
                </span>
    </div>
);
} else {
  return (
  <div>  
        <img src={props.data.icon} alt={props.data.description} id="current-icon" />
            <strong id="temperature">{Math.round(celsius())}</strong>
                <span className="units">
                  <a href="/" id="fahrenheit-link" onClick={displayFahrenheit}>
                    °F
                  </a>{" "}
                  |
                  <a href="/" id="celsius-link" className="active" >
                    °C{" "}
                  </a>
                </span>
    </div>
  );
  }
}
