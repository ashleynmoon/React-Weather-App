import React, {useState} from 'react';
import FormattedDate from "./FormattedDate";
import axios from "axios";
import './App.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
      console.log(response.data);
      setWeatherData({
          ready: true,
          temperture: Math.round(response.data.main.temp),
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
      });
  }

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}

function search(){
  const apiKey = "6d17b1c8058ae49bbff41e55fd958e63";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}  

if (weatherData.ready){
return (
    <div>
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-6 pt-2 city-name">
              <div className="text-start" id="currentCity">
                Detroit
              </div>
            </div>
            <div className="col pt-4">
              <form>
                <div className="row">
                  <input
                    type="text"
                    className="col form-control form-control"
                    id="cityInput"
                    placeholder="Enter City"
                  />
                  <button
                    type="submit"
                    className="col-auto btn btn btn-outline-light"
                    id="search-city"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    type="submit"
                    className="col-auto btn btn btn-outline-light"
                    id="current-location"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="row current-info">
              <div className="col-6 text-start">
                <ul>
                  <li id="dateAndTime"><FormattedDate /></li>
                  <li id="description">{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6 text-end">
                <ul>
                  <li>
                    <i className="fas fa-thermometer-half" id=""></i> Feels
                    Like:{" "}
                    <span id="feels">84</span>°
                  </li>
                  <li>
                    <i className="fas fa-burn"></i>
                    Humidity:{" "}
                    <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    <i className="fas fa-wind"></i> Wind:{" "}
                    <span id="wind">{weatherData.wind}</span> mph
                  </li>
                </ul>
              </div>
            </div>

            <div className="row current-weather">
              <div className="clearfix text-center">
                <img src="http://openweathermap.org/img/wn/04d@2x.png"alt="Overcast Clouds" id="current-icon" />
                <strong id="temperature">{weatherData.temperture}</strong>
                <span className="units">
                  <a href="#" id="fahrenheit-link" className="active">
                    °F
                  </a>{" "}
                  |
                  <a href="#" id="celsius-link">
                    °C{" "}
                  </a>
                </span>
              </div>
            </div>
            <div id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
else {
search();
return "Loading...";
} 
}