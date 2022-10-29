import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
import {mensReducer} from "./mens/menReducer";
import {womensReducer} from "./womens/womenReducer"

import thunk from "redux-thunk";;


const rootRuducer=combineReducers({
    mensReducer,
    womensReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)))