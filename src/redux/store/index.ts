import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { counterpartiesReducer } from "./reducer/conterparties/counterpartiesReducer";
import { counterpartiesAuthorsListReducer } from "./reducer/conterparties/conterpartiesAuthorsListReducer";

const reducer = combineReducers({
  counterparties: counterpartiesReducer,
  //contractor:newContractorReducer,
  // counterpartiesTypesList:counterpartiesTypesListReducer,
  authorsList: counterpartiesAuthorsListReducer,
});

export type RootState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
