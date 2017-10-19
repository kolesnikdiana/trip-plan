import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import createVisibleCitiesSelector from '../../../core/cities/selectors';
import citiesActions from '../../../core/cities/actions';
import filterActions from '../../../core/filter/actions';

import Home from '../../pages/home/home';

const getFilterTag = (state) => state.filterTag;

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = createStructuredSelector({
  cities: createVisibleCitiesSelector,
  filterTag: getFilterTag
});

const mapDispatchToProps = {
  onAddPlace: citiesActions.addPlace,
  onTick: citiesActions.tickPlace,
  onFilterChange: filterActions.setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
