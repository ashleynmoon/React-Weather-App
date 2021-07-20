import React from "react";

export default function WeatherInfo(props){
    return (
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
                    <span id="humidity">{props.data.humidity}</span>%
                  </li>
                  <li>
                    <i className="fas fa-wind"></i> Wind:{" "}
                    <span id="wind">{props.data.wind}</span> mph
                  </li>
                </ul>
              </div>
              );
}