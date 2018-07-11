// @flow
import searchActions from '../search/actions';
import type { SearchLineType } from '../types';

const searchReducer = (
  initialState: SearchLineType =
  {
    value: '',
    focus: false
  },
  action
): string => {
  switch (action.type) {
    case searchActions.SORT_BY_INPUT:
      return action.payload ?
        {
          ...initialState,
          value: action.payload.input
        } : initialState;

    case searchActions.SET_FOCUS_STATE:
      return action.payload ?
        {
          ...initialState,
          focus: action.payload.state
        } : initialState;

    default:
      return initialState;
  }
};

export default searchReducer;
