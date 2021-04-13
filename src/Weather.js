import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  return (
    <div class="weather">
      <div class="card">
        <div class="card-body">
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

          <h2 className="main-city">Berlin, Germany</h2>
          <h3 className="date">Last updated: Sunday, 17th January 19:00</h3>
          <div className="row">
            <div className="col-6">
              <p className="forecast">Cloudy</p>
              <span className="icon-and-forecast">
                <img
                  alt="weather forecast"
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                />
              </span>
              <span className="icon-and-forecast">-1 </span>

              <span className="units">
                <a href="/" className="celsius-temperature">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </div>
            <div className="col-6">
              <ul className="precipitation">
                <li>Humidity:77%</li>
                <li>Wind: 8km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
