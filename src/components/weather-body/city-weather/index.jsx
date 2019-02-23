import React from "react";
import styledComponents from "styled-components";

const CityWeather = styledComponents.div`
  width: 400px;
  margin: 0 auto;
  text-align: left;
`;

export class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: this.props.activeZip,
      weatherData: null
    }
  }
  componentDidMount() {
    const zip = this.props.activeZip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
      zip + "&APPID=f181b55f19f2e5d900a7505e59ef2a8d&units=imperial";
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({ weatherData: data });
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeZip != this.props.activeZip) {
      const zip = nextProps.activeZip;
      const URL = "http://api.openweathermap.org/data/2.5/weather?id=" +
        zip + "&APPID=f181b55f19f2e5d900a7505e59ef2a8d&units=imperial";
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ weatherData: data });
    })
    }
  }
  
  render() {
    const weather = this.state.weatherData;
    console.log(weather);
    if (!weather) return <div>Loading</div>;
    return(
      <CityWeather>
        <h1>Weather in {weather.name}: {weather.weather[0].description}</h1>
        <p>Current temperature: {weather.main.temp}°</p>
        <p>Max temperature: {weather.main.temp_max}°</p>
        <p>Min temperature: {weather.main.temp_min}°</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Pressure: {weather.main.pressure}Pa</p>
      </CityWeather>
    )
  }
} 