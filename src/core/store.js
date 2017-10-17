// TODO: use immutable + re-selector to contain the state
import { createStore } from 'redux';
import tripPlanReducer from './reducer';

const store = createStore(tripPlanReducer);

export default store;
