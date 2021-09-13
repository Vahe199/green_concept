import {
  AuthorsListAction,
  AuthorsListActionType,
  AuthorsListState,
} from "../../../types/conterpart_authors_list";

const initialState: AuthorsListState = {
  authors: [],
  error: false,
  loading: false,
};
export const counterpartiesAuthorsListReducer = (
  state = initialState,
  action: AuthorsListAction
): AuthorsListState => {
  switch (action.type) {
    case AuthorsListActionType.FETCH_AUTHORS_LIST:
      return { error: false, loading: true, authors: [] };
    case AuthorsListActionType.FETCH_AUTHORS_LIST_SUCCESS:
      return { loading: false, error: false, authors: action.payload };
    case AuthorsListActionType.FETCH_AUTHORS_LIST_ERROR:
      return { loading: false, error: action.payload, authors: [] };
    default:
      return state;
  }
};
