import { connect } from 'react-redux';
import actionCreators from '../../../core/actions';
import { filterValues } from '../../../core/filter/actions';

import Home from './home';

const getVisibleCities = (cities, filterTag) => {
  switch (filterTag) {
    case filterValues.SHOW_ALL:
      return cities;

    case filterValues.SHOW_COMPLETED:
      return cities.filter(city => city.isVisited);

    case filterValues.SHOW_ACTIVE:
      return cities.filter(city => !city.isVisited);

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
  onAddPlace: name => dispatch(actionCreators.addPlace(name)),
  onTick: e => dispatch(actionCreators.tickPlace(e.target.id)),
  onFilterChange: filterTag => dispatch(actionCreators.setFilter(filterTag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
