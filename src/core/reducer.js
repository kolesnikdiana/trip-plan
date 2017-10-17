import { combineReducers } from 'redux';
import citiesReducer from './cities/cities-reducer';
import filterReducer from './filter/filter-reducer';

const tripPlanReducer = combineReducers({
  cities: citiesReducer,
  filterTag: filterReducer
});

export default tripPlanReducer;
