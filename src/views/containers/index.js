import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import searchActions from '../../core/search/actions';
import App from '../app';

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({
  cities: state.cities,
  searchLine: state.searchLine
});

const mapDispatchToProps = { onSearch: searchActions.sortByInput };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
