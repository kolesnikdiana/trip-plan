// @flow
import filterActions from './actions';

const filterReducer = (
  state: string = filterActions.SHOW_ALL,
  action
): string => {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return action.payload ? action.payload.filterTag : state;

    default:
      return state;
  }
};

export default filterReducer;
