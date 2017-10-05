import React, { Component } from 'react';
import '../../css/CitiesList.css';

class CityView extends Component {
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

export class CitiesList extends Component {
  render() {
    return (
      <ul className="to-do-list cities-list">
        {this.props.cities.map((city) => <CityView key={city.id} city={city} />)}
      </ul>
    )
  }
}