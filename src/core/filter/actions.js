const filterActions = {
  SET_FILTER: 'SET_FILTER',

  SHOW_ALL: 'FILTER/SHOW_ALL',
  HIDE_ALL: 'FILTER/HIDE_ALL',
  SHOW_COMPLETED: 'FILTER/SHOW_VISITED',
  SHOW_ACTIVE: 'FILTER/SHOW_UNVISITED',

  setFilter: filterTag => ({
    type: filterActions.SET_FILTER,
    payload: { filterTag }
  })
};

export default filterActions;
