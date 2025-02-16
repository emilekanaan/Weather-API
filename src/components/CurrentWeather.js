import React, { Component } from "react";

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