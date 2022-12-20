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
      error: null,
      isLoaded: false,
      city : "London",
      Weather: null
      
      
    };
    this.handleClick = this.handleClick.bind(this);
  }

   

  componentDidMount() {
    console.log("I'm working")

    let city = this.state.city
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=4db870ca0cf1889ae2f419c32469bf3c`;
    fetch(url)
      .then(
        (res) => res.json())
      .then(
        (result) => {
          this.setState({
           Weather: result,
           isLoaded: true
          });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    
  }


  handleClick(e) {
    console.log("the e on click is here: ", e )
    this.setState({
      city: e
    });
    let city = e
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=4db870ca0cf1889ae2f419c32469bf3c`;
    fetch(url)
      .then(
        (res) => res.json())
      .then(
        (result) => {
          this.setState({
           Weather: result,
           isLoaded: true
          });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
    
  }
  
  
  
  render() {

    

    function hoursArray(Weather) {
      let hours = [];
      for (let i = 1; i <= 7; i++) {
        hours.push(Weather.list[i].dt_txt.slice(11,16))
        
      }
      return hours;
    }

    function tempArray(Weather) {
      let temp = [];
      for (let i = 1; i<= 7; i++) {
        temp.push((Weather.list[i].main.temp).toFixed())
      }
      return temp
    }

    // function iconsArray(Weather) {
    //   let icon = [];
    //   for (let i = 5; i<= 11; i++) {
    //     icon.push((Weather.list[i].weather))
    //   }
    //   return icon
    // }
  
  

    // const Weather = this.state.Weather
    // console.log(Weather[0])

  // console.log(this.state.Weather[0].dt)
    const { error, isLoaded, Weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
      return (
    
        
        <div className="app">
          <Search 
            click={this.handleClick}
            city={this.state.city}
          />
          {console.log(this.state)}
          <CurrentWeather 
            currentWeatherDesc={this.state.Weather.list[0].weather[0].description} 
            tempMin={(this.state.Weather.list[0].main.temp_min).toFixed()}
            tempMax={(this.state.Weather.list[0].main.temp_max).toFixed()}
            humidity={this.state.Weather.list[0].main.humidity}
            pressure={this.state.Weather.list[0].main.pressure}
          />
         <HourlyWeather 
            hourlyArray={hoursArray(this.state.Weather)}
            tempArray={tempArray(this.state.Weather)}
            
            // hourlyIcons={iconsArray(this.state.Weather)}
      /> 
    
        </div>
      );
    }
  }
  
  }


export default App;
