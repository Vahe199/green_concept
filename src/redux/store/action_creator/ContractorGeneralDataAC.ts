import { Dispatch } from "redux";
import { contractorApi } from "../../../api/api";
import {
  ContractorGeneralDataAction,
  ContractorGeneralDataActionType,
} from "../../types/contractor_general_data";

export const insertContractorGeneralData =
  (data: any) => async (dispatch: Dispatch<ContractorGeneralDataAction>) => {
    try {
      dispatch({
        type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA,
      });
      await contractorApi.insertContractorGeneralData(data);
      dispatch({
        type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };
