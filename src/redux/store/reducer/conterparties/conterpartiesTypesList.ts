import {
  TypesListAction,
  TypesListActionType,
  TypesListState,
} from "../../../types/conterpart_types_list";

const initialState: TypesListState = {
  types: [],
  error: false,
  loading: false,
};
export const counterpartiesTypesListReducer = (
  state = initialState,
  action: TypesListAction
): TypesListState => {
  switch (action.type) {
    case TypesListActionType.FETCH_TYPES_LIST:
      return { error: false, loading: true, types: [] };
    case TypesListActionType.FETCH_TYPES_LIST_SUCCESS:
      return { loading: false, error: false, types: action.payload };
    case TypesListActionType.FETCH_TYPES_LIST_ERROR:
      return { loading: false, error: action.payload, types: [] };
    default:
      return state;
  }
};
