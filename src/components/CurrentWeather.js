import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import unknown from "../img/weather-icons/unknown.svg";

class CurrentWeather extends Component {
    

    render() {
        return (
            <>
            <main>
          <figure>
            <img src={this.props.mainIcon} width="200" alt="icon"></img>
            <figcaption><strong>{this.props.currentWeatherDesc}</strong></figcaption>
          </figure>
          <section className="weatherDetails">
            <p>
                <span className="label">Temperature </span>  
                <span className="tempValue">
                    {this.props.tempMin}&#176; to {this.props.tempMax}&#8451;
                </span>
            </p>

            <section className="moreDetails">
              <p><span className="label">Humidity </span><span className="humidityValue">{this.props.humidity}%</span></p>
              <p><span className="label">Pressure </span><span className="pressureValue">{this.props.pressure}</span></p>
            </section>
          </section>
        </main>
            </>
        )
    }
}

export default CurrentWeather;