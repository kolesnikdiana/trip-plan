// @flow
import citiesActions from './actions';
import type { City as CityType } from '../types';

const initialCitiesState: CityType[] = [
  { id: '1', name: 'London', isVisited: true },
  { id: '2', name: 'Paris', isVisited: false },
  { id: '3', name: 'Minsk', isVisited: true },
  { id: '4', name: 'Barcelona', isVisited: false },
  { id: '5', name: 'Tokyo', isVisited: false },
  { id: '6', name: 'Beijing', isVisited: false }
];

const citiesReducer = (
  initialState: CityType[] = initialCitiesState,
  action
): CityType[] | null => {
  switch (action.type) {
    case citiesActions.ADD_PLACE:
      return action.payload ?
        [...initialState, {
          id: (initialState.length + 1).toString(),
          name: action.payload.name,
          isVisited: false
        }] : initialState;

    case citiesActions.TICK_PLACE:
      return action.payload ?
        initialState.map((city: CityType): CityType => {
          if (city.id === action.payload.id) {
            return {
              ...city,
              isVisited: !city.isVisited
            };
          }
          return city;
        }) : initialState;

    default:
      return initialState;
  }
};

export default citiesReducer;
