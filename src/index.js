import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <div className="container">
        <main>
          <Search />
          <Weather />
          <Forecast />
        </main>
        <footer>
          This project was coded by Emily Brisbin, is
          <a
            href="https://github.com/emilyyvonne/weatherAppFlex"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>
          and
          <a
            href="https://dapper-daffodil-b9c33a.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
