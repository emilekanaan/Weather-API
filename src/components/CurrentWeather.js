import React, { Component } from "react";
import storm from "../img/weather-icons/storm.svg";

class CurrentWeather extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
            <main>
          <figure>
            <img src={storm} width="200" alt="storm icon"></img>
            <figcaption><strong>overcast clouds</strong></figcaption>
          </figure>
          <section className="weatherDetails">
            <p><strong>Temperature</strong> <span className="tempValue">10&#176; to 11&#8451;</span></p>
            <section className="moreDetails">
              <p><span className="label">Humidity </span><span className="humidityValue">78%</span></p>
              <p><span className="label">Pressure </span><span className="pressureValue">1008.48</span></p>
            </section>
          </section>
        </main>
            </>
        )
    }
}

export default CurrentWeather;