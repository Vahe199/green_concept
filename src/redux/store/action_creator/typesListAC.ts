import { Dispatch } from "redux";
import { counterpartiesApi } from "../../../api/api";
import {
  TypesListAction,
  TypesListActionType,
} from "../../types/conterpart_types_list";

export const fetchTypesList =
  () => async (dispatch: Dispatch<TypesListAction>) => {
    try {
      dispatch({ type: TypesListActionType.FETCH_TYPES_LIST });
      const { data } = await counterpartiesApi.fetchContractorsTypes();
      console.log(data, "types");
      dispatch({
        type: TypesListActionType.FETCH_TYPES_LIST_SUCCESS,
        payload: data.types,
      });
    } catch (e) {
      dispatch({
        type: TypesListActionType.FETCH_TYPES_LIST_ERROR,
        payload: "Error Happened Conterparties TYPES List Is Fallen",
      });
    }
  };
