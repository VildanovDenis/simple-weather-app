import React from "react";
import styledComponents from "styled-components";

const CityButton = styledComponents.button`
  min-width: 150px;
  padding: 5px;
  border: none;
  font-size: 14px;
  line-height: 16px;
  background-color: white;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  :hover {
    background: gainsboro;
  }
`;

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.props.updateZip(this.props.placeZip);
  };
  render() {
    return <CityButton type="button" onClick={this.onButtonClick}>{this.props.placeName}</CityButton>
  }
} 
