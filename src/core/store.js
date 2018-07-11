// TODO: use immutable + re-selector to contain the state
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import tripPlanReducer from './reducers';

// Create an enhanced history that syncs navigation events with the store
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...tripPlanReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);


export default store;
