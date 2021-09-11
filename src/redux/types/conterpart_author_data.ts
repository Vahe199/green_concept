export interface AuthorDataState {
  AuthorData:any[],
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
}

interface GetAuthorDataAction {
  type: AuthorDataActionType.GET_AUTHOR_DATA;
  payload: any[];
}


export type AuthorDataAction = GetAuthorDataAction
