import { Dispatch } from "redux";
import {AuthorDataActionType} from "../../types/conterpart_author_data";


export const recoveryAuthorDataState = () =>  (dispatch: Dispatch) => {

    dispatch({type: AuthorDataActionType.RECOVERY_AUTHOR_DATA_STATE})
};
