import {
  CounterpartiesAction,
  CounterpartiesActionType,
  CounterpartiesState,
} from "../../../types/counterparties";

const initialState: CounterpartiesState = {
  contractors: [],
  error: null,
  loading: false,
};
export const counterpartiesReducer = (
  state = initialState,
  action: CounterpartiesAction
): CounterpartiesState => {
  switch (action.type) {
    case CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST:
      return { ...state, loading: true };
    case CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_SUCCESS:
      return { ...state, loading: false, contractors: action.payload };
    case CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };
    default:
      return state;
  }
};
