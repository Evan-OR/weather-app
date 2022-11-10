import React from 'react';

function CurrentInfo(props) {
  const { currentHourData, currentDayData, getTimeFromTimestamp, timeZoneOffest } = props;
  const tempInfo = currentHourData.main;
  const windInfo = currentHourData.wind;
  const sunRiseSetInfo = currentDayData.sys;
  const d = new Date();

  const roundNumber = (num) => Math.round(num);

  return (
    <div className="current-info">
      {/* First Column */}

      <div className="vertical-column">
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-thermometer-three-quarters"></i>
          </div>
          <div className="column-content">
            <div className="element-value">{roundNumber(currentDayData.main.temp_max)}&deg;</div>
            <div className="element-sub-heading">High</div>
          </div>
        </div>
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-thermometer-empty"></i>
          </div>
          <div className="column-content">
            <div className="element-value">{roundNumber(currentDayData.main.temp_min)}&deg;</div>
            <div className="element-sub-heading">Low</div>
          </div>
        </div>
      </div>
      {/* Second Column */}
      <div className="vertical-column">
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-wind"></i>
          </div>
          <div className="column-content">
            <div className="element-value">{roundNumber(windInfo.speed)}km/h</div>
            <div className="element-sub-heading">Wind</div>
          </div>
        </div>
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-cloud-rain"></i>
          </div>
          <div className="column-content">
            <div className="element-value">{roundNumber(currentHourData.pop * 100)}%</div>
            <div className="element-sub-heading">Rain</div>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="vertical-column">
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-sun"></i>
          </div>
          <div className="column-content">
            <div className="element-value">
              {getTimeFromTimestamp(sunRiseSetInfo.sunrise + timeZoneOffest + d.getTimezoneOffset() * 60)}
            </div>
            <div className="element-sub-heading">Sunrise</div>
          </div>
        </div>
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-moon"></i>
          </div>
          <div className="column-content">
            <div className="element-value">
              {getTimeFromTimestamp(sunRiseSetInfo.sunset + timeZoneOffest + d.getTimezoneOffset() * 60)}
            </div>
            <div className="element-sub-heading">Sunset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentInfo;
