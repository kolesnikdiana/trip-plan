// @flow
const citiesActions = {
  ADD_PLACE: 'ADD_PLACE',
  TICK_PLACE: 'TOGGLE_PLACE',

  addPlace: (name: string) => ({
    type: citiesActions.ADD_PLACE,
    payload: { name }
  }),
  tickPlace: (id: string) => ({
    type: citiesActions.TICK_PLACE,
    payload: { id }
  })
};

export default citiesActions;
