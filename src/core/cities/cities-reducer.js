import { citiesActionTypes as actionTypes } from './actions';

const initialCitiesState = [
  { id: '1', name: 'London', isVisited: true },
  { id: '2', name: 'Paris', isVisited: false },
  { id: '3', name: 'Minsk', isVisited: true },
  { id: '4', name: 'Barcelona', isVisited: false },
  { id: '5', name: 'Tokyo', isVisited: false },
  { id: '6', name: 'Beijing', isVisited: false }
];

const citiesReducer = (initialState = initialCitiesState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return [...initialState, {
        id: (initialState.length + 1).toString(),
        name: action.payload.name,
        isVisited: false
      }];

    case actionTypes.TICK_PLACE:
      return initialState.map((city) => {
        if (city.id === action.payload.id) {
          return {
            ...city,
            isVisited: !city.isVisited
          };
        }
        return city;
      });

    default:
      return initialState;
  }
};

export default citiesReducer;
