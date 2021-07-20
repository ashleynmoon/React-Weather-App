import React, {useState} from 'react';
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import './App.css';

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
      setWeatherData({
          ready: true,
          temperture: Math.round(response.data.main.temp),
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          date: new Date(response.data.dt*1000),
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
          wind: Math.round(response.data.wind.speed),
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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
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
                {city}
              </div>
            </div>
            <div className="col pt-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <input
                    type="search"
                    className="col form-control"
                    placeholder="Enter City"
                    autoFocus="on"
                    onChange={handleCityChange}
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
                  <li id="dateAndTime"><FormattedDate date={weatherData.date} /></li>
                  <li id="description">{weatherData.description}</li>
                </ul>
              </div>
              <WeatherInfo data={weatherData}/>
            </div>

            <div className="row current-weather">
              <div className="clearfix text-center">
                <img src={weatherData.icon} alt="Overcast Clouds" id="current-icon" />
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