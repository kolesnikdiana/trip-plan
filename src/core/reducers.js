import { combineReducers } from 'redux';
import citiesReducer from './cities/reducer';
import filterReducer from './filter/reducer';

const tripPlanReducer = combineReducers({
  cities: citiesReducer,
  filterTag: filterReducer
});

export default tripPlanReducer;
