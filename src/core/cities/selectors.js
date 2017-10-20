// @flow
import { createSelector } from 'reselect';
import {
  City as CityType,
  FilterState as FilterStateType
} from '../types';

const getCities = (state) => state.cities;
const getFilterState = (state) => state.filterState;

const getVisibleCities = (
  cities: CityType[],
  filterState: FilterStateType
): CityType[] | null => {
  if (!filterState.showUnvisited && !filterState.showVisited) {
    return [];
  }
  return (cities.filter((city: CityType): boolean =>
    city.isVisited === filterState.showVisited
    || !city.isVisited === filterState.showUnvisited));
};

// todo: create selectorCreator -> to don't recalculate visible cities when a city ticked
const createVisibleCitiesSelector = createSelector(
  [getCities, getFilterState],
  getVisibleCities
);

export default createVisibleCitiesSelector;
