import React, { Component } from 'react';
import {CitiesList} from '../cities/cities-list';
import {AddItem} from './add-item';
import {Filter} from './filter';
import {CITIES} from '../../data';

import '../../css/components/home.css';

export class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      newPlace: '',
      isValid: true
    };
  }

  onInputChange = (value) => {
    this.setState({
      newPlace: value
    });
  };

  validate = () => {
    this.setState((prevState) => ({
      isValid: true
    }));
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