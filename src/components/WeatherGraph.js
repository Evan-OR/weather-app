import React, { useState } from 'react';
import PrecipitationGraph from './PrecipitationGraph';
import TempGraph from './TempGraph';

function WeatherGraph(props) {
  const { hourlyWeather, getTimeFromTimestamp, getTimeFromTimeZoneOffset } = props;
  const [displayTemp, setDisplayTemp] = useState(true);
  const maxTempArray = hourlyWeather.map((el) => Math.round(el.main.temp_max));
  const minTempArray = hourlyWeather.map((el) => Math.round(el.main.temp_min));
  const popArray = hourlyWeather.map((el) => Math.round(el.pop * 100));

  const roundToNearestFive = (num) => {
    return Math.ceil(num / 5) * 5;
  };

  const getDaysOfWeek = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let graphDays = [];
    let startingNum = new Date().getDay();

    for (let i = 0; i < 7; i++) {
      if (startingNum + i > 6) {
        startingNum = -i - 1;
      } else {
        graphDays.push(daysOfWeek[startingNum + i]);
      }
    }

    return graphDays;
  };

  const generateLabels = () => {
    return hourlyWeather.map((el) => getTimeFromTimestamp(el.dt));
  };

  return (
    <div className="chart">
      <div className="menu-wrapper">
        <div className={displayTemp ? 'menu-option active' : 'menu-option'} onClick={() => setDisplayTemp(true)}>
          <i className="fas fa-temperature-high"></i> Temperature Graph
        </div>
        <div className={displayTemp ? 'menu-option' : 'menu-option active'} onClick={() => setDisplayTemp(false)}>
          <i className="fas fa-tint"></i> Precipitation Graph
        </div>
      </div>
      {displayTemp ? (
        <TempGraph
          generateLabels={generateLabels}
          maxTempArray={maxTempArray}
          minTempArray={minTempArray}
          roundToNearestFive={roundToNearestFive}
        />
      ) : (
        <PrecipitationGraph popArray={popArray} getDaysOfWeek={getDaysOfWeek} />
      )}
    </div>
  );
}

export default WeatherGraph;
