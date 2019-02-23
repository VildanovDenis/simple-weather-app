import React, { Component } from 'react';
import './App.css';
import { WeatherBody } from './weather-body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherBody></WeatherBody>
      </div>
    );
  }
}

export default App;
