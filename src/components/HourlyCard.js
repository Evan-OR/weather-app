import React from 'react';

function HourlyCard(props) {
  const { temp, weather, pop, renderIcon, time } = props;

  const roundNumber = (num) => Math.round(num);

  return (
    <div className="hourly-card">
      <div className="hourly-elements">
        <div className="hourly-time">{time}</div>
        <div className="hourly-icon">{renderIcon(weather)}</div>
        <div className="hourly-temp">{roundNumber(temp)}&deg;</div>
        <div className="hourly-rain">
          <i className="fas fa-tint"></i>
          <div className="pop">{Math.round(pop * 100)}%</div>
        </div>
      </div>
    </div>
  );
}

export default HourlyCard;
