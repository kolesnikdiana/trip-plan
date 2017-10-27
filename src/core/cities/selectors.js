// @flow
import { createSelector } from 'reselect';
import type {
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
  cities: CityType[],
  input: string
): CityType[] | null => (
  input === '' ? cities :
    cities.filter((city: CityType): boolean =>
      city.name.toLowerCase().includes(input.toLowerCase()))
);

export const createCitiesByInputSelector = createSelector(
  [
    getCities,
    getSearchInputState
  ],
  getSearchResult
);

// todo: create selectorCreator -> to don't recalculate visible cities when a city ticked
const createVisibleCitiesSelector = createSelector(
  [
    createCitiesByInputSelector,
    getFilterState
  ],
  getVisibleCities
);

export default createVisibleCitiesSelector;
