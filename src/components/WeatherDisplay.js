import CurrentInfo from './CurrentInfo';
import CurrentTemp from './CurrentTemp';
import HourlyCard from './HourlyCard';
import WeatherGraph from './WeatherGraph';

function WeatherDisplay(props) {
  const { hourlyData, dailyData } = props;
  const currentTemp = Math.round(hourlyData.list[0].main.temp);
  const currentWeather = hourlyData.list[0].weather[0];
  const hourlyWeather = hourlyData.list;
  const dailyWeatherList = dailyData.list.slice(0, 7);

  const getTimeFromTimeZoneOffset = (timezoneOffset) => {
    const offsetInMinutes = timezoneOffset / 60;
    const d = new Date();
    const utcOffset = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes() + utcOffset + offsetInMinutes);
    return d;
  };

  const getTimeFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mins =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hours}:${mins}`;
  };

  const renderIcon = (id) => {
    switch (id) {
      case '01d':
        return <i className="fas fa-sun"></i>;
      case '01n':
        return <i className="fas fa-moon"></i>;
      case '02d':
        return <i className="fas fa-cloud-sun"></i>;
      case '02n':
        return <i className="fas fa-cloud-moon"></i>;
      case '03d':
        return <i className="fas fa-cloud"></i>;
      case '03n':
        return <i className="fas fa-cloud"></i>;
      case '04d':
        return <i className="fas fa-cloud"></i>;
      case '04n':
        return <i className="fas fa-cloud"></i>;
      case '09d':
        return <i className="fas fa-cloud-showers-heavy"></i>;
      case '09n':
        return <i className="fas fa-cloud-showers-heavy"></i>;
      case '10d':
        return <i className="fas fa-cloud-sun-rain"></i>;
      case '10n':
        return <i className="fas fa-cloud-moon-rain"></i>;
      case '11d':
        return <i className="fas fa-bolt"></i>;
      case '11n':
        return <i className="fas fa-bolt"></i>;
      case '13d':
        return <i className="fas fa-snowflake"></i>;
      case '13n':
        return <i className="fas fa-snowflake"></i>;
      case '50d':
        return <i className="fas fa-smog"></i>;
      case '50n':
        return <i className="fas fa-smog"></i>;
      default:
        console.log('BROKE');
    }
  };

  const localTime = getTimeFromTimeZoneOffset(dailyData.city.timezone);
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <>
      <div className="card-warpper">
        {/* Top weather Title */}
        <div className="card-title">
          <div className="location">
            {hourlyData.city.name}, {hourlyData.city.country}
          </div>
          <div className="date">{`${formatTime(
            localTime.getHours()
          )}:${formatTime(
            localTime.getMinutes()
          )} ${localTime.toDateString()}`}</div>
        </div>
        <div className="current-weather-info">
          <CurrentTemp
            temp={currentTemp}
            weather={currentWeather}
            renderIcon={renderIcon}
          />
          <div className="current-divider"></div>
          {/* Middle Weather info */}
          <CurrentInfo
            dayInfo={dailyData.list[0]}
            getTimeFromTimestamp={getTimeFromTimestamp}
            timeZoneOffest={dailyData.city.timezone}
          />
        </div>
        {/* Hourly weather cards */}
        <div className="hourly-info">
          <div className="hourly-title">Todays Weather</div>
          <div className="card-wrapper">
            {hourlyWeather.map((el) => (
              <HourlyCard
                key={el.dt}
                temp={el.main.temp}
                weather={el.weather[0].icon}
                pop={el.pop}
                renderIcon={renderIcon}
                timeInfo={{
                  initialTime: getTimeFromTimeZoneOffset(
                    dailyData.city.timezone
                  ),
                  index: hourlyWeather.indexOf(el),
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <WeatherGraph dailyWeather={dailyWeatherList} />
    </>
  );
}

export default WeatherDisplay;
