import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";



import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div className="app">
        <Search />
        <CurrentWeather />
        <HourlyWeather />

      </div>
    );
  }
}

export default App;
