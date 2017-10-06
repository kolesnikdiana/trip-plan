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
      visited: []
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
          <CitiesList cities={CITIES} onTick={this.onTick} />
          <ul>test info (visited list): {this.state.visited.length ? this.state.visited.map((id) => {
            var el = CITIES.find((el) => el.id === parseInt(id, 10));
            return (<li key={el.id}>{el.name}</li>);
          }) : 'no elements'}</ul>
        </div>
      </div>
    );
  }
}