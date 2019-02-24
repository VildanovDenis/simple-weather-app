import React from "react";
import styledComponents from "styled-components";

import { CityButton } from "../city-button";
import { CityWeather } from "../city-weather";

const StyledWeatherWrapper = styledComponents.section`
  width: 1024px;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
`;
const StyledButtonList = styledComponents.ul`
  display: flex;
  justify-content: center;
  width: auto;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
const PLACES = [
  { name: "Moscow", zip: "524901" },
  { name: "Saint Petersburg", zip: "498817" },
  { name: "Tyumen", zip: "1488754" }
];

export class WeatherBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeZip: 1488754
    };
  }

  /**
   * Принимает код города и обновляет состояние компонента.
   */
  updateZip = activeZip => {
    this.setState({
      activeZip: activeZip
    });
  };

  render() {
    return (
      <StyledWeatherWrapper>
        <StyledButtonList>
          {PLACES.map(place => (
            <li key={place.zip}>
              <CityButton
                key={place.zip}
                placeZip={place.zip}
                placeName={place.name}
                updateZip={this.updateZip}
              />
            </li>
          ))}
        </StyledButtonList>
        <CityWeather activeZip={this.state.activeZip} />
      </StyledWeatherWrapper>
    );
  }
}
