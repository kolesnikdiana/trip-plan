// @flow
import filterActions from './actions';
import type { FilterState as FilterStateType } from '../types';

const filterReducer = (
  initialState: FilterStateType = {
    showVisited: true,
    showUnvisited: true
  },
  action
): FilterStateType => {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return action.payload ? {
        ...initialState,
        ...action.payload.changedFilter
      } : initialState;

    default:
      return initialState;
  }
};

export default filterReducer;
