import { Dispatch } from "redux";
import { contractorApi } from "../../../api/api";
import {
  AuthorDataAction,
  AuthorDataActionType,
} from "../../types/conterpart_author_data";

export const insertContractorGeneralData =
  (formData: any) => async (dispatch: Dispatch<AuthorDataAction>) => {
    try {
      dispatch({
        type: AuthorDataActionType.CHANGE_AUTHOR_DATA,
      });
      const { data } = await contractorApi.insertContractorGeneralData(
        formData
      );
      dispatch({
        type: AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS,
        payload: data.contractor,
      });
    } catch (e) {
      dispatch({
        type: AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR,
        payload: "что-то пошло не так !",
        errorMsg: "  ",
      });
    }
  };
