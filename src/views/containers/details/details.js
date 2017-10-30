import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import searchActions from '../../core/search/actions';
import Details from '../../pages/details';

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = state => ({
  cities: state.cities,
  searchLine: state.searchLine
});

export default withRouter(connect(mapStateToProps, null)(Details));
