import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description:response.data.weather[0].description,
      icon:response.data.weather[0].icon,

    });
  }
  
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value);

  }
  function search(){
  let apiKey = "33591efff15ea7a06a20f804dfa7d7d9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
    <div className="weather">
     <div className="container">
       <div className="card">
        <div className="card-body">
          <nav className="navbar navbar-light bg-light">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                placeholder="Enter City"
                aria-label="Search"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </nav>
          <WeatherInfo data={weatherData}/>
         <WeatherForecast coordinates={weatherData.coordinates}/>

       
        </div>
      </div>
      <small>
      <p><a href="https://github.com/deliahijon22/weather-app-react">Open-source coded</a> by Delia Hijon</p>
    </small>
      </div>
      
    </div>
  );
} else {

  search();
  return "Loading...";

} 
  }
  
