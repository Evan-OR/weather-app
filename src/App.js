import React, { useState, useEffect } from 'react';
import FailedToLoad from './components/FailedToLoad';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './index.scss';

function App() {
  const [hourlyData, setHourlyData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [loading, setLoading] = useState('true');
  const [searchValue, setSearchValue] = useState('Dublin, ie');

  const api_key = process.env.REACT_APP_API_KEY;

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
    try {
      const h_promise = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${searchValue}&appid=${api_key}&units=metric&cnt=24`
      );
      const hourlyData = await h_promise.json();
      setHourlyData(hourlyData);
      const d_promise = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${searchValue}&cnt=${16}&appid=${api_key}&units=metric`
      );
      const dailyData = await d_promise.json();
      setDailyData(dailyData);
      //Check if failed to find location
      if (dailyData.cod === '404' || hourlyData.cod === '404') {
        setLoading('failed');
      } else {
        setLoading('false');
      }
    } catch (error) {
      console.log('Fetch failed');
      setLoading('failed');
    }
  };

  useEffect(() => {
    setData(searchValue);
  }, [searchValue]);

  const checkLoading = () => {
    switch (loading) {
      case 'true':
        return <Loading />;
      case 'false':
        return <WeatherDisplay hourlyData={hourlyData} dailyData={dailyData} />;
      case 'failed':
        return <FailedToLoad />;
      default:
        return <div>Something Broke :(</div>;
    }
  };

  return (
    <div className="App">
      <div className="title-icon">
        <div className="icon svg-shadow">
          <i className="fas fa-globe-europe"></i>
        </div>
        <div className="title">GLOBAL WEATHER</div>
      </div>
      <div className="title-divider"></div>
      <SearchBar updateSearch={updateSearch} />
      {checkLoading()}
    </div>
  );
}

export default App;
