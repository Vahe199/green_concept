import { Dispatch } from "redux";
import { contractorApi } from "../../../../api/api";
import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
} from "../../../types/contractor_contact_data";
//fetch contacts
export const fetchContactsList = (config: any) =>  async (dispatch: Dispatch<ContractorContactDataAction>) => {

    try {
        dispatch({
            type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA,
        });
        const {data} = await contractorApi.fetchContractorsContactList(config)
        dispatch({type:ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_LIST_SUCCESS,
            payload:data?.contacts})
    }catch (e:any) {
        console.log(e.response)
        dispatch({
            type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR,
            payload: "Error Happened Conterparties Table List Is Fallen",
        });
    }
}
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
  (config: any) => async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      dispatch({
        type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_LIST_DATA,
      });
      const { data } = await contractorApi.getContractorContactData(config);
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
  (id: number | null) =>
  async (dispatch: Dispatch<ContractorContactDataAction>) => {
    try {
      const { data }: { data: { contact: { [key: string]: any } } } = id
        ? await contractorApi.getContractorContactDataWithId(id)
        : { data: { contact: {} } };

      dispatch({
        type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_DATA_WITH_ID,
        payload: data.contact,
      });
    } catch (e: any) {
      console.log(e.response);
    }
  };


export const fetchContractorContacts = (id:number) => async (dispatch: Dispatch<ContractorContactDataAction>) => {

    try {
        const {data} = await contractorApi.getContactById(id)
        dispatch({type:ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID,
            payload:data?.contact})

    }catch (e:any) {
        console.log(e.response)
    }
}
