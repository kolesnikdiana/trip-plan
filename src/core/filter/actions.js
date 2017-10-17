// Filter actions
export const filterActionTypes = { SET_FILTER: 'SET_FILTER' };

export const filterValues = {
  SHOW_ALL: 'SHOW_ALL',
  HIDE_ALL: 'HIDE_ALL',
  SHOW_COMPLETED: 'SHOW_VISITED',
  SHOW_ACTIVE: 'SHOW_UNVISITED'
};

// Cities action creators
const filterActions = {
  setFilter: filterTag =>
    ({ type: filterActionTypes.SET_FILTER, payload: { filterTag } })
};

export default filterActions;
