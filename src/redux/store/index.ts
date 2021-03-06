import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { counterpartiesReducer } from "./reducer/conterparties/counterpartiesReducer";
import { counterpartiesAuthorsListReducer } from "./reducer/conterparties/conterpartiesAuthorsListReducer";
import { counterpartiesAuthorDataReducer } from "./reducer/conterparties/conterpartiesAuthorDataReducer";
import { counterpartiesAssetsListReducer } from "./reducer/conterparties/conterpartiesAssetsTypesList";
import { counterpartiesServicesTypesListReducer } from "./reducer/conterparties/conterpartiesServicesTypesList";
import { contractorBankDetailsReducer } from "./reducer/contractor/contractorBankDetailsReducer";
import {counterpartiesContactPersonReducer} from "./reducer/conterparties/conterpartiesContactPersonReducer";
import {employeesListReducer} from "./reducer/employees/employeesReducer";
import {employeesAssetsReducer} from "./reducer/employees/employeesAssetsReducer";
import {employeesQualificationReducer} from "./reducer/employees/employeesQualificationReducer";

const reducer = combineReducers({
  counterparties: counterpartiesReducer,
  contractorBankDetails: contractorBankDetailsReducer,
  assets: counterpartiesAssetsListReducer,
  assets_employees: employeesAssetsReducer,
  servicesTypes: counterpartiesServicesTypesListReducer,
  authorsList: counterpartiesAuthorsListReducer,
  author: counterpartiesAuthorDataReducer,
  contactPerson:counterpartiesContactPersonReducer,
  employees:employeesListReducer,
  employeesQualification:employeesQualificationReducer
});
// convert object to string and store in localStorage
function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
export type RootState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() =>
  saveToLocalStorage({
    author: store.getState().author,
    assets: store.getState().assets,
    employees:store.getState().employees
  })
);
