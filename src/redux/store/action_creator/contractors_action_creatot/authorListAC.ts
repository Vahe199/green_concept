import { Dispatch } from "redux";
import { counterpartiesApi } from "../../../../api/api";
import {
  AuthorsListAction,
  AuthorsListActionType,
} from "../../../types/conterpart_authors_list";

export const fetchAuthorsList =
  () => async (dispatch: Dispatch<AuthorsListAction>) => {
    try {
      dispatch({ type: AuthorsListActionType.FETCH_AUTHORS_LIST });
      const { data }:any = await counterpartiesApi.fetchContractorsAuthor();
      dispatch({
        type: AuthorsListActionType.FETCH_AUTHORS_LIST_SUCCESS,
        payload: data.authors,
      });
    } catch (e) {
      dispatch({
        type: AuthorsListActionType.FETCH_AUTHORS_LIST_ERROR,
        payload: "Error Happened Conterparties AUTHORS List Is Fallen",
      });
    }
  };
