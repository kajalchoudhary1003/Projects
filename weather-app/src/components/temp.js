import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./weathercard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d522d7f002aa73867fef5b77f4aadc82`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      // destructuring is done by creating and naming main to weathermood
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="contain flex sm:flex-row min-[300px]:flex-col mb-5 justify-between sm:mt-3">
        <input
          type="search"
          placeholder="search..."
          autoFocus
          id="search"
          className="searchTerm w-60 h-8 p-2 text-lg outline-none text-black font-medium tracking-wide grow mr-2 rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <button
          className="searchButton border-4 px-2 rounded-md border-darker bg-darkest text-white hover:bg-dark hover:text-darkest font-semibold tracking-wider text-xl"
          type="button"
          onClick={getWeatherInfo}
        >
          Search
        </button>
      </div>
      {/* card  */}
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Temp;
