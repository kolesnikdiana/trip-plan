import { combineReducers } from 'redux';
import citiesReducer from './cities/reducer';
import filterReducer from './filter/reducer';
import searchReducer from './search/reducer';

const tripPlanReducer = combineReducers({
  cities: citiesReducer,
  filterState: filterReducer,
  searchLine: searchReducer
});

export default tripPlanReducer;
