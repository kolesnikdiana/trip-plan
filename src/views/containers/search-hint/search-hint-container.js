import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import createVisibleCitiesSelector from '../../../core/cities/selectors';

import SearchHint from '../../components/search-hint';


// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = createStructuredSelector({ cities: createVisibleCitiesSelector });

export default connect(mapStateToProps, null)(SearchHint);
