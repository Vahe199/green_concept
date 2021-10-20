import { Dispatch } from "redux";
import { contractorApi } from "../../../../api/api";
import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
} from "../../../types/contractor_contact_data";

// insert contact
export const insertContractorContactData =
  (formData: any) =>
  async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA,
      });
      const { data } = await contractorApi.insertContractorContactData(
        formData
      );
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS,
        payload: data,
      });
    } catch (e: any) {
      console.log(e.response);
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR,
        payload: "Error Happened Conterparties Table List Is Fallen",
      });
    }
  };

// get contacts all
export const getContactPersonsListData =
  () => async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      const { data } = await contractorApi.getContractorContactData();
      dispatch({
        type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_LIST_DATA,
        payload: data.contacts,
      });
    } catch (e: any) {
      console.log(e.response);
    }
  };

//get contact by id
export const getContactPersonsDataWithId =
  (id: number) => async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      const { data } = await contractorApi.getContractorContactDataWithId(id);
      dispatch({
        type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_DATA_WITH_ID,
        payload: data.contact,
      });
    } catch (e: any) {
      console.log(e.response);
    }
  };