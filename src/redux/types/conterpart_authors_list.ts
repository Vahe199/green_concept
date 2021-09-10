export interface AuthorsListState {
  authors: any[];
  loading: boolean;
  error: boolean | string;
}

export enum AuthorsListActionType {
  FETCH_AUTHORS_LIST = "FETCH_AUTHORS_LIST",
  FETCH_AUTHORS_LIST_SUCCESS = "FETCH_AUTHORS_LIST_SUCCESS",
  FETCH_AUTHORS_LIST_ERROR = "FETCH_AUTHORS_LIST_ERROR",
}

interface FetchAuthorsListAction {
  type: AuthorsListActionType.FETCH_AUTHORS_LIST;
}
interface FetchAuthorsListSuccessAction {
  type: AuthorsListActionType.FETCH_AUTHORS_LIST_SUCCESS;
  payload: any[];
}
interface FetchAuthorsListErrorAction {
  type: AuthorsListActionType.FETCH_AUTHORS_LIST_ERROR;
  payload: string;
}

export type AuthorsListAction =
  | FetchAuthorsListAction
  | FetchAuthorsListSuccessAction
  | FetchAuthorsListErrorAction;
