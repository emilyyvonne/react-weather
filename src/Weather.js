import React from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    temperature: "20",
    date: "Saturday,1600",
    description: " Sunny",
    humidity: "80",
    wind: "10",
    imgUrl: "🌤️",
  };
  return (
    <div className="weather-app-data">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <div className="weather-app-now">
        <h1 className="weather-app-city">{weatherData.city}</h1>
        <p className="weather-app-details">
          <span>{weatherData.date}</span>,
          <span id="description">{weatherData.description}</span>
          <br />
          Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
          <strong id="wind-speed">{weatherData.wind}km/h</strong>
        </p>
      </div>
      <div className="weatherAppTemperatureContainer">
        <span className="weather-app-icon">{weatherData.imgUrl} </span>
        <span className="weather-app-temperature">
          {weatherData.temperature}
        </span>
        <span className="weather-app-unit">°C</span>
      </div>
    </div>
  );
}
