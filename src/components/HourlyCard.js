import React from 'react';

function HourlyCard(props) {
  const { temp, weather, pop, renderIcon, timeInfo } = props;

  const returnAjustedTime = ({ initialTime, index }) => {
    const checkForSingleDigit = (num) => (num < 10 ? `0${num}` : num);
    const checkIfOver24 = (num) => (num > 23 ? num - 24 : num);

    let hours = checkForSingleDigit(
      checkIfOver24(initialTime.getHours() + index)
    );

    return `${hours}:00`;
  };

  const roundNumber = (num) => Math.round(num);

  return (
    <div className="hourly-card">
      <div className="hourly-elements">
        <div className="hourly-time">{returnAjustedTime(timeInfo)}</div>
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
