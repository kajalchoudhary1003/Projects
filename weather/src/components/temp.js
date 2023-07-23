import React, { useEffect, useState } from 'react';
import "./style.css";
import WeatherCard from './weathercard';

const Temp = () => {
  const [searchValue, setSearchValue] = useState("delhi");
const [tempInfo, setTempInfo] = useState({});

const getWeatherInfo = async() => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d522d7f002aa73867fef5b77f4aadc82`;

    const res = await fetch(url);
    const data = await res.json();

    const {temp, humidity, pressure} = data.main;
    // destructuring is done by creating and naming main to weathermood
    const {main: weathermood} = data.weather[0];
    const {name} = data;
    const {speed} = data.wind;
    const {country, sunset} = data.sys;
    

    const myNewWeatherInfo = {
temp,
humidity, pressure,
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
}, [])


  return (
    <>
      <div className="contain">
        <div className="search">
            <input type="search"
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue }
            onChange={(e) => setSearchValue(e.target.value)} />

            <button className='searchButton' type='button' onClick={getWeatherInfo}>
                Search
            </button>
        </div>
      </div>
      {/* card  */}
<  WeatherCard tempInfo ={tempInfo}/>
    </>
  )
}

export default Temp
