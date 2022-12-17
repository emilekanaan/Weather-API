import React, { Component } from "react";



class HourlyWeather extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
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
            </>
        )
    }
}

export default HourlyWeather;