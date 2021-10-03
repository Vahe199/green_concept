import { Dispatch } from "redux";
import { contractorApi } from "../../../api/api";
import {
  ContractorBankDetailsAction,
  ContractorBankDetailsActionType,
} from "../../types/contractor_bank_details";

export const fetchContractorBankDetails =
  (id: number) => async (dispatch: Dispatch<ContractorBankDetailsAction>) => {
    try {
      dispatch({
        type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS,
      });
      const { data } = await contractorApi.fetchContractorBankDetailsData(id);
      dispatch({
        type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_SUCCESS,
        payload: data.bank_details,
      });
    } catch (e) {
      dispatch({
        type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };

export const insertContractorBankDetails =
  (data: any) => async (dispatch: Dispatch<ContractorBankDetailsAction>) => {
    try {
      dispatch({
        type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS,
      });
      await contractorApi.insertContractorBankDetailsData(data);
      dispatch({
        type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };

export const updateContractorBankDetails =
  (bankAccountDetailId: number | string, data: any) =>
  async (dispatch: Dispatch<ContractorBankDetailsAction>) => {
    try {
      dispatch({
        type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS,
      });
      await contractorApi.updateContractorBankDetailsData(
        bankAccountDetailId,
        data
      );
      dispatch({
        type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };
