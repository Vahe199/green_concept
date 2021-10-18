import { Dispatch } from "redux";
import {AuthorDataActionType} from "../../types/conterpart_author_data";
import {ContractorContactDataActionType} from "../../types/contractor_contact_data";


export const recoveryAuthorDataState = () =>  (dispatch: Dispatch) => {

    dispatch({type: AuthorDataActionType.RECOVERY_AUTHOR_DATA_STATE})
};

export const recoveryContractorContactState = () =>  (dispatch: Dispatch) => {

    dispatch({type: ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE})
};
