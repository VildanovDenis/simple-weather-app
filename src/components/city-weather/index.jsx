import React from "react";
import styledComponents from "styled-components";

const StyledCityWeather = styledComponents.div`
  width: 400px;
  margin: 0 auto;
  text-align: left;
`;

export class CityWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: this.props.activeZip,
      weatherData: null
    };

    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  componentDidMount() {
    const { activeZip: zip } = this.props;
    const URL =
      "http://api.openweathermap.org/data/2.5/weather?id=" +
      zip +
      "&APPID=f181b55f19f2e5d900a7505e59ef2a8d&units=imperial";
    this.fetchWeatherData(URL);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeZip != this.props.activeZip) {
      const { activeZip: zip } = nextProps;
      const URL =
        "http://api.openweathermap.org/data/2.5/weather?id=" +
        zip +
        "&APPID=f181b55f19f2e5d900a7505e59ef2a8d&units=imperial";
      this.fetchWeatherData(URL);
    }
  }

  /**
   * Делает запрос для получения данных и установки их в состояние.
   */
  fetchWeatherData(URL) {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ weatherData: data });
      });
  }

  render() {
    const { weatherData: weather } = this.state;
    if (!weather) {
      return <div>Loading</div>;
    }
    return (
      <StyledCityWeather>
        <h1>
          Weather in {weather.name}: {weather.weather[0].description}
        </h1>
        <p>Current temperature: {weather.main.temp}°</p>
        <p>Max temperature: {weather.main.temp_max}°</p>
        <p>Min temperature: {weather.main.temp_min}°</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Pressure: {weather.main.pressure}Pa</p>
      </StyledCityWeather>
    );
  }
}
