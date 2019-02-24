import React from "react";
import styledComponents from "styled-components";

const StyledCityButton = styledComponents.button`
  min-width: 150px;
  padding: 5px;
  border: none;
  font-size: 14px;
  line-height: 16px;
  background-color: white;
  box-sizing: border-box;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: gainsboro;
  }
`;

export class CityButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  /**
   * Вызывает свойство родителя для обновления его состояния по клику на кнопку.
   */
  onButtonClick() {
    const { updateZip, placeZip } = this.props;
    updateZip(placeZip);
  }

  render() {
    return (
      <StyledCityButton type="button" onClick={this.onButtonClick}>
        {this.props.placeName}
      </StyledCityButton>
    );
  }
}
