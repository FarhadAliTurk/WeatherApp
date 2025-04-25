import React from "react";
import { Helmet } from "react-helmet"; // SEO optimization
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Helmet>
        <title>React Weather App</title>
        <meta
          name="description"
          content="A modern React weather app for real-time weather updates."
        />
      </Helmet>
      <Header />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;