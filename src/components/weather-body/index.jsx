import React from "react";
import styledComponents from "styled-components";
import { Button } from "./city-button";
import { Weather } from "./city-weather";

const WeatherWrapper = styledComponents.section`
  width: 1024px;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
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
      activeZip: 1488754,
    };
  };

  updateZip = (i) => {
    const zip = i;
    this.setState({
      activeZip: zip,
    })
  };

  render() {
    return (
      <WeatherWrapper>
        <aside>
          {PLACES.map(place => (
              <Button
                key={place.zip}
                placeZip={place.zip}
                placeName={place.name}
                updateZip={this.updateZip}
              />
          ))}
        </aside>
        <Weather activeZip={this.state.activeZip} />
      </WeatherWrapper>
    );
  }
}
