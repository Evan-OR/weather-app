import React, { useState } from 'react';
import PrecipitationGraph from './PrecipitationGraph';
import TempGraph from './TempGraph';

function WeatherGraph(props) {
  const { hourlyWeather, getTimeFromTimestamp, timeZoneOffest } = props;
  const [displayTemp, setDisplayTemp] = useState(true);
  const tempArray = hourlyWeather.map((el) => Math.round(el.main.temp_max)).slice(0, 16);
  const minTempArray = hourlyWeather.map((el) => Math.round(el.main.temp_min));
  const popArray = hourlyWeather.map((el) => Math.round(el.pop * 100)).slice(0, 16);

  const roundToNearestFive = (num) => {
    return Math.ceil(num / 5) * 5;
  };

  const generateLabels = () => {
    return hourlyWeather.map((el) => getTimeFromTimestamp(el.dt + timeZoneOffest)).slice(0, 16);
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
          tempArray={tempArray}
          minTempArray={minTempArray}
          roundToNearestFive={roundToNearestFive}
        />
      ) : (
        <PrecipitationGraph popArray={popArray} generateLabels={generateLabels} />
      )}
    </div>
  );
}

export default WeatherGraph;
