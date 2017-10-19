// @flow
import { createSelector } from 'reselect';
import filterActions from '../filter/actions';
import { City as CityType } from '../types';

const getCities = (state) => state.cities;
const getFilterTag = (state) => state.filterTag;

const getVisibleCities = (
  cities: CityType[],
  filterTag: string
): CityType[] | null => {
  switch (filterTag) {
    case filterActions.SHOW_ALL:
      return cities;

    case filterActions.SHOW_COMPLETED:
      return cities.filter((city: CityType): boolean =>
        city.isVisited);

    case filterActions.SHOW_ACTIVE:
      return cities.filter((city: CityType): boolean =>
        !city.isVisited);

    default:
      return [];
  }
};

const createVisibleCitiesSelector = createSelector(
  [getCities, getFilterTag],
  getVisibleCities
);

export default createVisibleCitiesSelector;
