import React from 'react';

function CurrentTemp(props) {
  const { temp, weather, renderIcon } = props;

  const capitaliseLetters = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  console.log(weather);
  return (
    <div className="current-temp">
      <div className="icon-temp">
        <div>{renderIcon(weather[0].icon)}</div>
        <div>{temp}&deg;</div>
      </div>
      <div className="temp-desc">{capitaliseLetters(weather[0].description)}</div>
    </div>
  );
}

export default CurrentTemp;
