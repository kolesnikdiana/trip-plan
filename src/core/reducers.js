import { combineReducers } from 'redux';
import citiesReducer from './cities/reducer';
import filterReducer from './filter/reducer';

const tripPlanReducer = combineReducers({
  cities: citiesReducer,
  filterState: filterReducer
});

export default tripPlanReducer;
