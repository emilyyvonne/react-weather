import React from "react";
import "./styles.css";

export default function weatherForecast() {
  return (
    <main>
      <div className="weather-forecast">
        <div className="weather-forecast-day">
          <div className="weather-forecast-date">Tue</div>
          <div className="weather-forecast-icon">🌤️</div>
          <div className="weather-forecast-temperatures">
            <span className="weather-forecast-temperature">
              <strong>15º</strong>
            </span>
            <span className="weather-forecast-temperature">9º</span>
          </div>
        </div>
      </div>
    </main>
  );
}
