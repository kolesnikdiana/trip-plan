import React, { Component } from 'react';
import {CitiesList} from '../Cities/CitiesList';
import {AddItem} from './AddItem';
import '../../css/Home.css';

class Filter extends Component {
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

const CITIES = [
  {id: 1, name: 'London'},
  {id: 2, name: 'Paris'},
  {id: 3, name: 'Minsk'},
  {id: 4, name: 'Barcelona'},
  {id: 5, name: 'Tokyo'},
  {id: 6, name: 'Beijing'}
];

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      newPlace: '',
      isValid: true
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onItemAdd = this.onItemAdd.bind(this);
    this.validate = this.validate.bind(this);
  }

  onInputChange(value) {
    this.setState({
      newPlace: value
    });
  }

  validate() {
    this.setState((prevState) => ({
      isValid: true
    }));
  }

  onItemAdd(e) {
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
  }

  render() {
    return (
      <div className="home-page">
        <AddItem isValid={this.state.isValid}
                 inputValue={this.state.newPlace}
                 onInputChange={this.onInputChange}
                 onFocus={this.validate}
                 onItemAdd={this.onItemAdd}/>
        <Filter/>
        <div className="page-content">
          <CitiesList cities={CITIES} />
        </div>
      </div>
    );
  }
}