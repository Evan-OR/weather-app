import React from 'react';

function CurrentInfo(props) {
  const { dayInfo, getTimeFromTimestamp, timeZoneOffest } = props;
  const tempInfo = dayInfo.temp;
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
            <div className="element-value">
              {roundNumber(tempInfo.max)}&deg;
            </div>
            <div className="element-sub-heading">High</div>
          </div>
        </div>
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-thermometer-empty"></i>
          </div>
          <div className="column-content">
            <div className="element-value">
              {roundNumber(tempInfo.min)}&deg;
            </div>
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
            <div className="element-value">
              {roundNumber(dayInfo.speed)}km/h
            </div>
            <div className="element-sub-heading">Wind</div>
          </div>
        </div>
        <div className="column-element">
          <div className="column-icon">
            <i className="fas fa-cloud-rain"></i>
          </div>
          <div className="column-content">
            <div className="element-value">
              {roundNumber(dayInfo.pop * 100)}%
            </div>
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
              {getTimeFromTimestamp(
                dayInfo.sunrise + timeZoneOffest + d.getTimezoneOffset() * 60
              )}
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
              {getTimeFromTimestamp(
                dayInfo.sunset + timeZoneOffest + d.getTimezoneOffset() * 60
              )}
            </div>
            <div className="element-sub-heading">Sunset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentInfo;
