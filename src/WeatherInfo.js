import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import "./App.css";


export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h2 className="main-city">{props.data.city}</h2>
          <h3 className="date"><FormattedDate date={props.data.date} /></h3>
          <div className="row">
            <div className="col-6">
              <p className="forecast">{props.data.description}</p>
              <span className="icon-and-forecast">
                <img
                  alt={props.data.description}
                  src={props.data.iconUrl}
                />
              </span>
              <span className="icon-and-forecast">{Math.round(props.data.temperature)}</span>

              <span className="units">
                <a href="/" className="celsius-temperature">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </div>
            <div className="col-6">
              <ul className="precipitation">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
    );
}