import { Dispatch } from "redux";
import { contractorApi } from "../../../api/api";
import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
} from "../../types/contractor_contact_data";

export const insertContractorContactData =
  (data: any) => async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA,
      });
      await contractorApi.insertContractorContactData(data);
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };
