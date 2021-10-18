import { Dispatch } from "redux";
import { contractorApi } from "../../../api/api";
import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
} from "../../types/contractor_contact_data";

export const insertContractorContactData =
  (formData: any) => async (dispatch: Dispatch<ContractorContactDataAction>) => {

    try {
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA,
      });
      const {data} = await contractorApi.insertContractorContactData(formData);
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS,
          payload:data
      });
    } catch (e:any) {
      console.log(e.response)
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };
