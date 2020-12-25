import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';
import createStore from './createStore';
import createSagaMiddleware from 'redux-saga';

const sagaMonitor = process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
