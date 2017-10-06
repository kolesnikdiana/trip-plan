import React, { Component } from 'react';
import {CitiesList} from './cities/cities-list';
import {AddItem} from './widgets/add-item';
import {Filter} from './widgets/filter';
import {CITIES} from '../data';

import '../css/components/home.css';

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      newPlace: '',
      isValid: true,
      visited: [1],
      filterValues: {
        showVisited: true,
        showUnvisited: true
      }
    };
  }

  onInputChange = (value) => {
    this.setState({
      newPlace: value
    });
  };

  validate = () => {
    this.setState({
      isValid: true
    });
  };

  onItemAdd = () => {
    if(this.state.newPlace.trim().length) {
      CITIES.push({
        id: CITIES.length + 1,
        name: this.state.newPlace
      });
    }
    else {
      this.setState({
        isValid: false
      });
    }

    this.setState({newPlace: ''});
  };

  onTick = (id, isChecked) => {
    this.setState(({visited: prevVisited}) => {
      return !isChecked ? { visited: prevVisited.filter((elId) => (elId !== id) ) }
            : { visited: [...prevVisited, id] };
    });
  };

  onFilterChange = (id, isTurnedOn) => {
    this.setState({
      filterValues: {...this.state.filterValues, [id]: isTurnedOn}
    });
  };

  render() {
    return (
      <div className="home-page">
        <AddItem isValid={this.state.isValid}
                 inputValue={this.state.newPlace}
                 onInputChange={this.onInputChange}
                 onFocus={this.validate}
                 onItemAdd={this.onItemAdd}/>
        <Filter cities={CITIES}
                filterValues={this.state.filterValues}
                visited={this.state.visited}
                onFilterChange={this.onFilterChange}/>
        <div className="page-content">
          <CitiesList cities={CITIES}
                      onTick={this.onTick}
                      showCities={this.state.filterValues}
                      visitedList={this.state.visited}/>
        </div>
      </div>
    );
  }
}