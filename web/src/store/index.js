import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';
import createStore from './createStore';
import createSagaMiddleware from 'redux-saga';
import persistReducers from "~/store/persistReducers";
import { persistStore } from 'redux-persist';

const sagaMonitor = process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
