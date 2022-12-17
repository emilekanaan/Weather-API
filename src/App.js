import React, { Component } from "react";


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

        <header>
          <form>
            <input placeholder="Type in a city name" className="cityInput" />
            <button>FIND WEATHER</button>
          </form>
        </header>

        <main>
          <figure>
            <img src="https://placekitten.com/200/200" alt="cat"></img>
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

        <section className="hourlyWeather">
          <section>
            <time>03:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">8&#8451;</span>
          </section>
          <section>
            <time>06:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">9&#8451;</span>
          </section>
          <section>
            <time>09:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">14&#8451;</span>
          </section>
          <section>
            <time>12:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">17&#8451;</span>
          </section>
          <section>
            <time>15:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">18&#8451;</span>
          </section>
          <section>
            <time>18:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">16&#8451;</span>
          </section>
          <section>
            <time>21:00</time>
            <figure>
              <img src="https://placekitten.com/75/75" alt="cat"></img>
            </figure>
            <span className="hTempValue">13&#8451;</span>
          </section>
        </section>

      </div>
    );
  }
}

export default App;
