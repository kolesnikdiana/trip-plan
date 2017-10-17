import { filterActionTypes as actionTypes, filterValues } from './actions';

const filterReducer = (state = filterValues.SHOW_ALL, action) => {
  if (action.type === actionTypes.SET_FILTER) {
    return action.payload.filterTag;
  }
  return state;
};

export default filterReducer;
