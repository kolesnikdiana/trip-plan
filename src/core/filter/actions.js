// @flow

const filterActions = {
  SET_FILTER: 'SET_FILTER',

  setFilter: (id: string) => ({
    type: filterActions.SET_FILTER,
    payload: { id }
  })
};

export default filterActions;
