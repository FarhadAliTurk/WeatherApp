import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchWeather = async () => {
    setLoading(true); // Start spinner animation
    setError(null);
    setWeather(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false); // Stop spinner animation
    }
  };

  return (
    <div className="container mt-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Search
        </button>
      </div>
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;