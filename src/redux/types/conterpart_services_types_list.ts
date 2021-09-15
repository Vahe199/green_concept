export interface ServicesTypesListState {
  servicesTypes: any[];
  load: boolean;
  error: boolean | string;
}

export enum ServicesTypesListActionType {
  FETCH_SERVICES_TYPES_LIST = "FETCH_SERVICES_TYPES_LIST",
  FETCH_SERVICES_TYPES_LIST_SUCCESS = "FETCH_SERVICES_TYPES_LIST_SUCCESS",
  FETCH_SERVICES_TYPES_LIST_ERROR = "FETCH_SERVICES_TYPES_LIST_ERROR",
}

interface FetchServicesTypesListAction {
  type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST;
}
interface FetchServicesTypesListSuccessAction {
  type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_SUCCESS;
  payload: any[];
}
interface FetchServicesTypesListErrorAction {
  type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_ERROR;
  payload: string;
}

export type ServicesTypesListAction =
  | FetchServicesTypesListAction
  | FetchServicesTypesListSuccessAction
  | FetchServicesTypesListErrorAction;
