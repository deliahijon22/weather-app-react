import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description:response.data.weather[0].description,
      iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",

    });
  }
  if (weatherData.ready) {return (
    <div className="weather">
    <div className="container">

      <div className="card">
        <div className="card-body">
          <nav className="navbar navbar-light bg-light">
            <form className="d-flex">
              <input
                className="form-control me-2"
                placeholder="Enter City"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button type="button" class="btn btn-outline-primary">
                Current
              </button>
            </form>
          </nav>

          <h2 className="main-city">{weatherData.city}</h2>
          <h3 className="date"><FormattedDate date={weatherData.date} /></h3>
          <div className="row">
            <div className="col-6">
              <p className="forecast">{weatherData.description}</p>
              <span className="icon-and-forecast">
                <img
                  alt={weatherData.description}
                  src={weatherData.iconUrl}
                />
              </span>
              <span className="icon-and-forecast">{Math.round(weatherData.temperature)}</span>

              <span className="units">
                <a href="/" className="celsius-temperature">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </div>
            <div className="col-6">
              <ul className="precipitation">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <small>
      <p><a href="https://github.com/deliahijon22/weather-app-react">Open-source coded</a> by Delia Hijon</p>
    </small>
      </div>
      
    </div>
  );
} else {
  let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading...";

} 
  }
  
