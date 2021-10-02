import React, { useState } from 'react';
import PrecipitationGraph from './PrecipitationGraph';
import TempGraph from './TempGraph';

function WeatherGraph(props) {
  const { dailyWeather } = props;
  const [displayTemp, setDisplayTemp] = useState(true);
  const maxTempArray = dailyWeather.map((el) => Math.round(el.temp.max));
  const minTempArray = dailyWeather.map((el) => Math.round(el.temp.min));
  const popArray = dailyWeather.map((el) => Math.round(el.pop * 100));

  const roundToNearestFive = (num) => {
    return Math.ceil(num / 5) * 5;
  };

  const getDaysOfWeek = () => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
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

  return (
    <div className="chart">
      <div className="menu-wrapper">
        <div
          className={displayTemp ? 'menu-option active' : 'menu-option'}
          onClick={() => setDisplayTemp(true)}
        >
          <i className="fas fa-temperature-high"></i> Temperature Graph
        </div>
        <div
          className={displayTemp ? 'menu-option' : 'menu-option active'}
          onClick={() => setDisplayTemp(false)}
        >
          <i className="fas fa-tint"></i> Precipitation Graph
        </div>
      </div>
      {displayTemp ? (
        <TempGraph
          getDaysOfWeek={getDaysOfWeek}
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
