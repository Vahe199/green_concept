import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {counterpartiesReducer} from "./reducer/counterpartiesReducer";
import {newContractorReducer} from "./reducer/NewContractorReducer";




const reducer = combineReducers({
     counterparties:counterpartiesReducer,
     contractor:newContractorReducer
});

export type  RootState = ReturnType<typeof reducer>

export const store= createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

