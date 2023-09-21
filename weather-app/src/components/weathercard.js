import React, { useState, useEffect } from "react";
import "./style.css";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  // setting weather icon
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-day-haze");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // converting seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;
  return (
    <>
      <article className="widget flex flex-col bg-dark">
        <div className="weather-partition flex sm:flex-row min-[300px]:flex-col bg-darkest p-3 rounded-md text-light">
          <div className="weatherIcon grow  w-52 text-center">
            <p className="mt-3 p-5">
              <i className={`wi ${weatherState} text-9xl`}></i>
            </p>
          </div>

          <div className="weatherInfo text-center mt-3">
            <div className="temperature flex flex-row text-5xl">
              <div>{temp}&deg;</div>
              <div className="weatherCondition ml-4">{weathermood}</div>
            </div>
            <div className="description">
              <div className="place text-3xl mt-2">
                {name}, {country}
              </div>
            </div>

            <div className="date text-2xl mt-2">
              {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* four columns section */}
        <div className="extra-temp flex sm:flex-row min-[300px]:flex-col justify-between mt-3 bg-darker rounded-md text-white">
          <div className="two-sided-section text-center text-xl mx-3 p-2">
            <p className="extra-info-leftside">
              {timeStr} <br />
              Time
            </p>
          </div>

          <div className="two-sided-section text-center text-xl mx-3 p-2">
            <p className="extra-info-leftside">
              {humidity} <br />
              Humidity
            </p>
          </div>

          <div className="two-sided-section text-center text-xl mx-3 p-2">
            <p className="extra-info-leftside">
              {pressure} <br />
              Pressure
            </p>
          </div>

          <div className="two-sided-section text-center text-xl mx-3 p-2">
            <p className="extra-info-leftside">
              {speed} <br />
              Speed
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
