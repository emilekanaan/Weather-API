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



class HourlyWeather extends Component {
    

    render() {

      function iconChoosing(num) {
      

      if(num < 300) {
        return storm;
      } else if (num >=300 && num < 499) {
        return drizzle;
      } else if (num >=500 && num < 599) {
        return rain;
      } else if (num >=600 && num < 699) {
        return snow;
      } else if (num >=700 && num < 799) {
        return fog;
      } else if (num ==800) {
        return clear;
      } else if (num ==801) {
        return partlycloudy;
      } else if (num >801 && num <= 805) {
        return mostlycloudy;
      }else {
        return undefined
      }

    }
        
        return (
            <>
            {console.log(iconChoosing(this.props.iconsArray[0]))}
            <section className="hourlyWeather">
          <section>
            <time>{this.props.hourlyArray[0]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[0])} width="75" alt="icon"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[0]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[1]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[1])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[1]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[2]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[2])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[2]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[3]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[3])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[3]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[4]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[4])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[4]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[5]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[5])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[5]}&#8451;</span>
          </section>
          <section>
            <time>{this.props.hourlyArray[6]}</time>
            <figure>
              <img src={iconChoosing(this.props.iconsArray[6])} width="75" alt="cat"></img>
            </figure>
            <span className="hTempValue">{this.props.tempArray[6]}&#8451;</span>
          </section>
        </section>
            </>
        )
    }
}

export default HourlyWeather;