import React, { Component } from 'react';

export class CityView extends Component {
  render() {
    const city = this.props.city;

    return (
      <li>
        <input type="checkbox" id={city.id}/>
        <label htmlFor={city.id}>{city.name}</label>
        <a href="#" className="map-view-link"></a>
      </li>
    )
  }
}