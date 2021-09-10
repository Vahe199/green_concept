export interface TypesListState {
  types: any[];
  loading: boolean;
  error: boolean | string;
}

export enum TypesListActionType {
  FETCH_TYPES_LIST = "FETCH_TYPES_LIST",
  FETCH_TYPES_LIST_SUCCESS = "FETCH_TYPES_LIST_SUCCESS",
  FETCH_TYPES_LIST_ERROR = "FETCH_TYPES_LIST_ERROR",
}

interface FetchTypesListAction {
  type: TypesListActionType.FETCH_TYPES_LIST;
}
interface FetchTypesListSuccessAction {
  type: TypesListActionType.FETCH_TYPES_LIST_SUCCESS;
  payload: any[];
}
interface FetchTypesListErrorAction {
  type: TypesListActionType.FETCH_TYPES_LIST_ERROR;
  payload: string;
}

export type TypesListAction =
  | FetchTypesListAction
  | FetchTypesListSuccessAction
  | FetchTypesListErrorAction;
