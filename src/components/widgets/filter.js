import React, { Component } from 'react';

export class Filter extends Component {
  constructor(props) {
    super(props);
  }

  handleTurn = (e) => (this.props.onFilterChange(e.target.id, e.target.checked));
  //TODO: TBD: create template to not duplicate "filter-container" block

  render() {
    return (
      <div className="filter-section">
        <div className="filter-container">
          <input type="checkbox"
                 checked={this.props.filterValues.showVisited}
                 id="showVisited"
                 onChange={this.handleTurn} />
          <label htmlFor="showVisited" >show visited places</label>
        </div>
        <div className="filter-container">
          <input type="checkbox"
                 checked={this.props.filterValues.showUnvisited}
                 id="showUnvisited"
                 onChange={this.handleTurn} />
          <label htmlFor="showUnvisited">show unvisited places</label>
        </div>
      </div>
    )
  }
}