import {Dispatch} from "redux";

export interface AuthorDataState {
  AuthorData:any[],
    loading:boolean,
    error:boolean | string,
    success:boolean,
    isChange:boolean
}
export interface DataType{
    full_name:null|string,
    short_name:null|string,
    group:null|any,
      // author:null|any[],
      // branches:null|any[],
      // crms:null|any[],
      // emails:null|any[],
      // group:null|any[],
      // phones: null|any[],
      // service: null|any[],
      // sites: null|any[],
}
export enum AuthorDataActionType {

  GET_AUTHOR_DATA = "GET_AUTHORS_DATA",
  CHANGE_AUTHOR_DATA = "CHANGE_AUTHORS_DATA",
  CHANGE_AUTHOR_DATA_SUCCESS = "CHANGE_AUTHOR_DATA_SUCCESS",
  CHANGE_AUTHOR_DATA_ERROR = "CHANGE_AUTHOR_DATA_ERROR",
  RECOVERY_AUTHOR_DATA_STATE = "RECOVERY_AUTHOR_DATA_STATE"
}

interface GetAuthorDataAction {
  type: AuthorDataActionType.GET_AUTHOR_DATA;
  payload: any[];
}
interface ChangeAuthorDataAction {
  type: AuthorDataActionType.CHANGE_AUTHOR_DATA;
}
interface ChangeAuthorDataSuccessAction {
    type: AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS;
    payload: any[];
}

interface ChangeAuthorDataErrorAction {
    type: AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR;
    payload: string;
}
interface RecoveryState
   {type: AuthorDataActionType.RECOVERY_AUTHOR_DATA_STATE}


export type AuthorDataAction = GetAuthorDataAction
    | ChangeAuthorDataAction
    | ChangeAuthorDataSuccessAction
    | ChangeAuthorDataErrorAction
    | RecoveryState
