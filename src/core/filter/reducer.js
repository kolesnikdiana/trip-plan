import filterActions from './actions';

const filterReducer = (state = filterActions.SHOW_ALL, action) => {
  switch (action.type) {
    case filterActions.SET_FILTER:
      return action.payload.filterTag;

    default:
      return state;
  }
};

export default filterReducer;
