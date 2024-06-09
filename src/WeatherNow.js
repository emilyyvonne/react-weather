import React form "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherNow(props) {
  return (
    <div className="Weather-app-now">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="weather-app-details">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//<div className="weather-app-now">
       // <h1 className="weather-app-city">{weatherData.city}</h1>
        //<p className="weather-app-details">
          //<span>{weatherData.date}</span>,
          //<span id="description">{weatherData.description}</span>
         // <br />
         // Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
         // <strong id="wind-speed">{weatherData.wind}km/h</strong>
        //</p>
      //</div>
      //<div className="weatherAppTemperatureContainer">
       // <span className="weather-app-icon">{weatherData.imgUrl} </span>
       // <span className="weather-app-temperature">
        //  {weatherData.temperature}
       // </span>
        //<span className="weather-app-unit">°C</span>
      //</div>
    //</div>