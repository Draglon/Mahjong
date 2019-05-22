import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';

import routesMap from './router/routesMap';
import page from './router/pageReducer';
import title from './router/pageTitle';
import reducers from './reducers/index';
// import rootSaga from './sagas/index';

// const sagaMiddleware = createSagaMiddleware();

const {
  reducer,
  middleware,
  enhancer,
} = connectRoutes(routesMap);
// const middlewares = applyMiddleware(middleware, sagaMiddleware, thunk);
const middlewares = applyMiddleware(middleware, thunk);
const enhancers = compose(enhancer, middlewares);

const rootReducer = combineReducers({
  reducers,
  title,
  page,
  location: reducer,
});

export default createStore(rootReducer, composeWithDevTools(enhancers));

// sagaMiddleware.run(rootSaga);
