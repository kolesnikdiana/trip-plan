import React, { Component } from 'react';

export class CityView extends Component {
  constructor(props) {
    super(props);
  }

  handleTick = (e) => (this.props.onTick(e.target.id, e.target.checked));

  render() {
    const city = this.props.city;
    return (
      <li className={this.props.className}>
        <input type="checkbox" id={city.id} onChange={this.handleTick}/>
        <label htmlFor={city.id}>{city.name}</label>
        <a href="#" className="map-view-link">Map view</a>
      </li>
    )
  }
}