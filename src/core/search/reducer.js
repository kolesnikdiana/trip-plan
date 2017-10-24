// @flow

import searchActions from '../search/actions';
import store from '../store';

const searchReducer = (
  initialState: string = '',
  action
): string => {
  switch (action.type) {
    case searchActions.SORT_BY_INPUT:
      return action.payload ?
        action.payload.input : initialState;

    default:
      return initialState;
  }
};

export default searchReducer;
