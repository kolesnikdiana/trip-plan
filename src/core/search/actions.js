// @flow
const searchActions = {
  SORT_BY_INPUT: 'SORT_BY_INPUT',
  SET_FOCUS_STATE: 'SET_FOCUS_STATE',

  sortByInput: (input: string) => ({
    type: searchActions.SORT_BY_INPUT,
    payload: { input }
  }),

  setFocusState: (state: boolean) => ({
    type: searchActions.SET_FOCUS_STATE,
    payload: { state }
  })
};

export default searchActions;
