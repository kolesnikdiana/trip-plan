import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { createCitiesByInputSelector } from '../../../core/cities/selectors';

import SearchHint from '../../components/search-hint';

// =====================================
//  CONNECT
// -------------------------------------
const mapStateToProps = createStructuredSelector({
  cities: createCitiesByInputSelector
});

export default connect(mapStateToProps, null)(SearchHint);
