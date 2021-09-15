export interface AssetsListState {
  assets: any[];
  load: boolean;
  error: boolean | string;
}

export enum AssetsListActionType {
  GET_ASSETS_LIST = "GET_ASSETS_LIST",
  GET_ASSETS_LIST_SUCCESS = "GET_ASSETS_LIST_SUCCESS",
  GET_ASSETS_LIST_ERROR = "GET_ASSETS_LIST_ERROR",
}

interface GetAssetsListAction {
  type: AssetsListActionType.GET_ASSETS_LIST;
}
interface GetAssetsListSuccessAction {
  type: AssetsListActionType.GET_ASSETS_LIST_SUCCESS;
  payload: any[];
}
interface GetAssetsListErrorAction {
  type: AssetsListActionType.GET_ASSETS_LIST_ERROR;
  payload: string;
}

export type AssetsListAction =
  | GetAssetsListAction
  | GetAssetsListSuccessAction
  | GetAssetsListErrorAction;
