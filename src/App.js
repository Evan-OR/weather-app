import React, { useState, useEffect } from 'react';
import FailedToLoad from './components/FailedToLoad';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './index.scss';
import titleIcon from './img/titleIcon.png';

function App() {
  const [hourlyData, setHourlyData] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState('true');
  const [searchValue, setSearchValue] = useState('dublin,ie');

  const api_key = 'e800088b7ddf69ccd2702d98da6c9baf';

  const updateSearch = (search) => {
    if (search !== searchValue && search !== '') {
      setSearchValue(search);
      setLoading('true');
    }
  };

  const setData = async (search) => {
    if (!search) return;
    // const regex = new RegExp(/^[a-zA-Z0-9!@#$%^&*)(+=._-]+$/g);
    // regex.test(searchValue)
    //   ? console.log('No special characters')
    //   : console.log('Has special characters');
    const currentWeatherRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`
    );
    const cWeather = await currentWeatherRequest.json();

    const hourlyWeatherRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}&units=metric`
    );
    const hWeather = await hourlyWeatherRequest.json();

    console.log('current Weather', cWeather);
    console.log('hourly Weather', hWeather);

    setHourlyData(hWeather);
    setCurrentWeather(cWeather);
    setLoading('false');

    // try {
    //   const currentWeatherRequest = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`
    //   );
    //   const cWeather = await currentWeatherRequest.json();

    //   const hourlyWeatherRequest = await fetch(
    //     `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}&units=metric`
    //   );
    //   const hWeather = await hourlyWeatherRequest.json();

    //   console.log('current Weather', cWeather);
    //   console.log('hourly Weather', hWeather);

    //   setHourlyData(hWeather);
    //   setCurrentWeather(cWeather);
    //   // Check if failed to find location
    //   if (cWeather.cod !== '200' || hWeather.cod !== '200') {
    //     setLoading('failed');
    //   } else {
    //     setLoading('false');
    //   }
    // } catch (err) {
    //   console.log('Fetch failed');
    //   setLoading('failed');
    // }
  };

  useEffect(() => {
    setData(searchValue);
  }, [searchValue]);

  const checkLoading = () => {
    switch (loading) {
      case 'true':
        return <Loading />;
      case 'false':
        return <WeatherDisplay hourlyData={hourlyData} currentData={currentWeather} />;
      case 'failed':
        return <FailedToLoad />;
      default:
        return <div>Something Broke :(</div>;
    }
  };

  return (
    <div className="App">
      <div className="title-icon">
        <div className="icon">
          {/* <i className="fas fa-globe-europe"></i> */}
          <img width="80px" src={titleIcon} alt="website icon"></img>
        </div>
        <div className="title">WEATHER APP</div>
      </div>
      <div className="title-divider"></div>
      <SearchBar updateSearch={updateSearch} />
      {checkLoading()}
    </div>
  );
}

export default App;
