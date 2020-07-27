import React from 'react'
import ReactWeather from 'react-open-weather';

// import 'react-open-weather/lib/css/ReactWeather.css';

const Weather = () => {

  return (
    <div>
      <ReactWeather
        // forecast="5days"
        forecast="today"
        apikey="01190bcfb911ff2a6ba93bf1e1bf10fe"
        type="city"
        city="London"
        lang="es"
      />
    </div>
  )
}

export default Weather