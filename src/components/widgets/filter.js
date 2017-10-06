import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div className="filter-section">
        <div className="filter-container">
          <input type="checkbox" defaultChecked={true} id="visited" />
          <label htmlFor="visited">show visited places</label>
        </div>
        <div className="filter-container">
          <input type="checkbox" defaultChecked={true} id="unvisited" />
          <label htmlFor="unvisited">show unvisited places</label>
        </div>
      </div>
    )
  }
}