import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherDescription = {
    currentCity: "Detroit",
    dateAndTime: "Sunday June 6 9:00PM",
    description: "Overcast Clouds",
    feelsLike: "84",
    humidity: "55",
    wind: "1",
    imgUrl: "http://openweathermap.org/img/wn/04d@2x.png"
  };
  return (
    <div>
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-6 pt-2 city-name">
              <div className="text-start" id="currentCity">
                {weatherDescription.currentCity}
              </div>
            </div>
            <div className="col pt-4">
              <form>
                <div className="row">
                  <input
                    type="text"
                    className="col form-control form-control"
                    id="cityInput"
                    autocomplete="off"
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
                  <li id="dateAndTime">{weatherDescription.dateAndTime}</li>
                  <li id="description">{weatherDescription.description}</li>
                </ul>
              </div>
              <div className="col-6 text-end">
                <ul>
                  <li>
                    <i className="fas fa-thermometer-half" id=""></i> Feels
                    Like:
                    <span id="feels">{weatherDescription.feelsLike}</span>°
                  </li>
                  <li>
                    <i className="fas fa-burn"></i>
                    Humidity:{" "}
                    <span id="humidity">{weatherDescription.humidity}</span>%
                  </li>
                  <li>
                    <i className="fas fa-wind"></i> Wind:{" "}
                    <span id="wind">{weatherDescription.wind}</span> mph
                  </li>
                </ul>
              </div>
            </div>

            <div className="row current-weather">
              <div className="clearfix text-center">
                <img src={weatherDescription.imgUrl} alt={weatherDescription.description} id="current-icon" />
                <strong id="temperature"></strong>
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
      <script src="src/index.js"></script>
    </div>
  );
}