import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { rootReducer } from "./reducers/reducers"
import rootSaga from "./saga/saga.js"

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);


export default store;
