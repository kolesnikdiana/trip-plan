// @flow
import type { changeFilter as changeFilterType } from '../types';

const filterActions = {
  SET_FILTER: 'SET_FILTER',

  setFilter: (changedFilter: changeFilterType) => ({
    type: filterActions.SET_FILTER,
    payload: { changedFilter }
  })
};

export default filterActions;
