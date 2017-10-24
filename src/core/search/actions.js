// @flow

const searchActions = {
  SORT_BY_INPUT: 'SORT_BY_INPUT',

  sortByInput: (input: string) => ({
    type: searchActions.SORT_BY_INPUT,
    payload: { input }
  }),
};

export default searchActions;
