import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import FakeWeather from "./data/FakeWeather.json";


import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     FakeWeather
     
    };

  }
  
  
  render() {

    function hoursArray(FakeWeather) {
      let hours = [];
      for (let i = 5; i <= 11; i++) {
        hours.push(FakeWeather.list[i].dt_txt.slice(11,16))
        
      }
      return hours;
    }

    function tempArray(FakeWeather) {
      let temp = [];
      for (let i = 5; i<= 11; i++) {
        temp.push((FakeWeather.list[i].main.temp -273.15).toFixed())
      }
      return temp
    }

    // function iconsArray(FakeWeather) {
    //   let icon = [];
    //   for (let i = 5; i<= 11; i++) {
    //     icon.push((FakeWeather.list[i].weather))
    //   }
    //   return icon
    // }


    return (
      <div className="app">
        <Search />
        {/* {console.log(this.state.FakeWeather.list[5].weather[0].icon)} */}
        {/*console.log(this.state.FakeWeather.list[4].dt_txt.slice(11,16))} */}
        <CurrentWeather 
          currentWeatherDesc={this.state.FakeWeather.list[4].weather[0].description} 
          tempMin={(this.state.FakeWeather.list[4].main.temp_min -273.15).toFixed()}
          tempMax={(this.state.FakeWeather.list[4].main.temp_max -273.15).toFixed()}
          humidity={this.state.FakeWeather.list[4].main.humidity}
          pressure={this.state.FakeWeather.list[4].main.pressure}
        />
        <HourlyWeather 
          hourlyArray={hoursArray(this.state.FakeWeather)}
          tempArray={tempArray(this.state.FakeWeather)}
          // hourlyIcons={iconsArray(this.state.FakeWeather)}
        />

      </div>
    );
  }
}

export default App;
