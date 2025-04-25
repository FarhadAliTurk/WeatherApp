import React from "react";

const Header = () => {
  return (
    <header className="weather-header">
      <div className="logo-container">
        <img
          src="https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-weather-icon-png-image_6685458.png"
          alt="Weather App Logo"
          className="weather-logo"
        />
        <h1 className="app-title">React Weather</h1>
      </div>
      <p className="tagline">Your source for real-time weather updates</p>
    </header>
  );
};

export default Header;