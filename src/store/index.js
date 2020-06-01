import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducers from './module/rootReducer';
import rootSagas from './module/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = [sagaMiddleware];

const store = createStore(rootReducers, middleware);

sagaMiddleware.run(rootSagas);
export { store };
