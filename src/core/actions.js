import citiesActions from './cities/actions';
import filterActions from './filter/actions';

const actionCreators = { ...citiesActions, ...filterActions };

export default actionCreators;
