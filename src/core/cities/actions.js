// Cities action types
export const citiesActionTypes = {
  ADD_PLACE: 'ADD_PLACE',
  TICK_PLACE: 'TOGGLE_PLACE'
};

// Cities action creators
const citiesActions = {
  addPlace: name => ({ type: citiesActionTypes.ADD_PLACE, payload: { name } }),
  tickPlace: id => ({ type: citiesActionTypes.TICK_PLACE, payload: { id } })
};

export default citiesActions;
