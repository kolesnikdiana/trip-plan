import React, { Component } from 'react';
import CitiesList from './cities-list';
import AddItem from './add-item';
import Filter from './filter';

import '../css/components/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPlace: '',
      visited: ['1'],
      filterValues: {
        showVisited: true,
        showUnvisited: true,
      },
    };
  }

  onInputChange = (e) => {
    this.setState({
      newPlace: e.target.value
    });
  };

  validate = () => {
    this.setState({
      isValid: true
    });
  };

  onItemAdd = () => {
    if (this.state.newPlace.trim().length) {
      this.props.addCity(this.state.newPlace);
    }
    else {
      this.setState({
        isValid: false
      });
    }

    this.setState({newPlace: ''});
  };

  onTick = (e) => {
    const input = e.target;
    this.setState(({visited: prevVisited}) => {
      return !input.checked ? {visited: prevVisited.filter((elId) => (elId !== input.id))}
        : {visited: [...prevVisited, input.id]};
    });
  };

  onFilterChange = (e) => {
    const input = e.target;
    this.setState({
      filterValues: {...this.state.filterValues, [input.id]: input.checked}
    });
  };

  render() {
    return (
      <div>

        <AddItem
          isValid={this.state.isValid}
          inputValue={this.state.newPlace}
          onInputChange={this.onInputChange}
          onFocus={this.validate}
          onItemAdd={this.onItemAdd}
        />

        <div className="filter-section">
          <Filter
            label="showVisited"
            filterOn={this.state.filterValues.showVisited}
            onFilterChange={this.onFilterChange}
          />

          <Filter
            label="showUnvisited"
            filterOn={this.state.filterValues.showUnvisited}
            onFilterChange={this.onFilterChange}
          />
        </div>

        <div className="app-root__page-content">
          <CitiesList
            cities={this.props.cities}
            onTick={this.onTick}
            showCities={this.state.filterValues}
            visitedList={this.state.visited}
          />
        </div>

      </div>
    );
  }
}

export default Home;
