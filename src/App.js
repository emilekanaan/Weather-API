import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      city: "",
      Weather: null,
      cod: 0,
      message: "",
      fetch: false
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {

    if (e.length > 0) {
      this.setState({
        city: e,
        cod: 0
      });
      let city = e;
      this.setState({
        fetch: true
      })
      let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=4db870ca0cf1889ae2f419c32469bf3c`;
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.cod === "404") {
              this.setState({
                cod: 404,
                message: result.message
              });
            } else {
              this.setState({
                Weather: result,
                isLoaded: true,
              });
            }
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error,

            });
          }
        );
    } else {
      this.setState({
        cod: 500,
        message: "Please enter a correct city name",
        fetch: true

      });
    }
  }

  render() {
    function hoursArray(Weather) {
      let hours = [];
      for (let i = 1; i <= 7; i++) {
        hours.push(Weather.list[i].dt_txt.slice(11, 16));
      }
      return hours;
    }

    function tempArray(Weather) {
      let temp = [];
      for (let i = 1; i <= 7; i++) {
        temp.push(Weather.list[i].main.temp.toFixed());
      }
      return temp;
    }

    function iconsArray(Weather) {
      let icon = [];
      for (let i = 1; i <= 7; i++) {
        icon.push(Weather.list[i].weather[0].id);
      }
      return icon;
    }

    function mainIconChoosing(Weather) {

      if (Weather < 300) {
        return storm;
      } else if (Weather >= 300 && Weather < 499) {
        return drizzle;
      } else if (Weather >= 500 && Weather < 599) {
        return rain;
      } else if (Weather >= 600 && Weather < 699) {
        return snow;
      } else if (Weather >= 700 && Weather < 799) {
        return fog;
      } else if (Weather === 800) {
        return clear;
      } else if (Weather === 801) {
        return partlycloudy;
      } else if (Weather > 801 && Weather <= 805) {
        return mostlycloudy;
      } else {
        return undefined;
      }
    }

    const { error, isLoaded, fetch } = this.state;
    if (error) {
      return <h1 className="errorMessage">Error: {error.message}</h1>;
    } else if (!isLoaded && fetch) {
      return (<>
        <Search click={this.handleClick} city={this.state.city} />

        <h1 className="errorMessage">Loading...</h1></>)
    } else if (this.state.cod === 404 || this.state.cod === 500) {
      return (
        <>
          <Search click={this.handleClick} city={this.state.city} />
          <h1 className="errorMessage">{this.state.message}</h1>
        </>
      );
    } else {
      return (
        <div className="app">
          <Search click={this.handleClick} city={this.state.city} />

          {this.state.fetch && (
            <CurrentWeather
              currentWeatherDesc={
                this.state.Weather.list[0].weather[0].description
              }
              tempMin={this.state.Weather.list[0].main.temp_min.toFixed()}
              tempMax={this.state.Weather.list[0].main.temp_max.toFixed()}
              humidity={this.state.Weather.list[0].main.humidity}
              pressure={this.state.Weather.list[0].main.pressure}
              mainIcon={mainIconChoosing(
                this.state.Weather.list[0].weather[0].id
              )}
            />
          )}

          {this.state.fetch && (
            <HourlyWeather
              hourlyArray={hoursArray(this.state.Weather)}
              tempArray={tempArray(this.state.Weather)}
              iconsArray={iconsArray(this.state.Weather)}
            />
          )}
        </div>
      );
    }
  }
}

export default App;




