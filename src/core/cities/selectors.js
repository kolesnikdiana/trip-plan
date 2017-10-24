// @flow
import { createSelector } from 'reselect';
import {
  City as CityType,
  FilterState as FilterStateType
} from '../types';

const getCities = (state) => state.cities;
const getFilterState = (state) => state.filterState;
const getSearchInputState = (state) => state.searchLine;

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

const getSearchResult = (
  visibleCities: CityType[],
  input: string
): CityType[] | null => (
  input === '' ? visibleCities :
    visibleCities.filter((city: CityType): boolean =>
      city.name.toLowerCase().includes(input.toLowerCase()))
);

// todo: create selectorCreator -> to don't recalculate visible cities when a city ticked
const createCitiesByFilterSelector = createSelector(
  [getCities, getFilterState],
  getVisibleCities
);

const createVisibleCitiesSelector = createSelector(
  [
    createCitiesByFilterSelector,
    getSearchInputState
  ],
  getSearchResult
);

export default createVisibleCitiesSelector;
