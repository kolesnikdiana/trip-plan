const citiesActions = {
  ADD_PLACE: 'ADD_PLACE',
  TICK_PLACE: 'TOGGLE_PLACE',

  addPlace: name => ({
    type: citiesActions.ADD_PLACE,
    payload: { name }
  }),
  tickPlace: id => ({
    type: citiesActions.TICK_PLACE,
    payload: { id }
  })
};

export default citiesActions;
