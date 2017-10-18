// @flow
import { connect } from 'react-redux';
import citiesActions from '../../../core/cities/actions';
import filterActions from '../../../core/filter/actions';
import type { City as CityType } from '../../components/types';

import Home from './home';

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

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({
  cities: getVisibleCities(state.cities, state.filterTag),
  filterTag: state.filterTag
});

// TODO: move onAddPlace dispatcher to AddItem container-component (??)
// TODO: move onFilterChange dispatcher to FilterSection container-component (??)
const mapDispatchToProps = dispatch => ({
  onAddPlace: (name: string): void =>
    dispatch(citiesActions.addPlace(name)),
  onTick: (e: SyntheticInputEvent<HTMLInputElement>): void =>
    dispatch(citiesActions.tickPlace(e.target.id)),
  onFilterChange: (filterTag: string): void =>
    dispatch(filterActions.setFilter(filterTag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
