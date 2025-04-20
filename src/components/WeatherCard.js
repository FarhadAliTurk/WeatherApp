import React from "react";

const WeatherCard = ({ weather }) => {
  const getWeatherTheme = () => {
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clear")) return "sunny";
    if (main.includes("cloud")) return "cloudy";
    if (main.includes("rain") || main.includes("drizzle")) return "rainy";
    if (main.includes("snow")) return "snowy";
    return "default";
  };

  const theme = getWeatherTheme();

  return (
    <div className={`weather-card ${theme}`}>
      <div className="weather-icon">
        <img
          src={
            theme === "sunny"
              ? "https://cdn-icons-png.flaticon.com/512/3222/3222808.png"
              : `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
          }
          alt={weather.weather[0].description}
        />
      </div>
      <div className="weather-details">
        <h2 className="weather-city">{weather.name}</h2>
        <p className="weather-temp">
          {Math.round(weather.main.temp - 273.15)}°C
        </p>
        <p className="weather-description">
          {weather.weather[0].description.toUpperCase()}
        </p>
        <div className="extra-details">
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
