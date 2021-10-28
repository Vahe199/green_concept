import { Dispatch } from "redux";
import { contractorApi } from "../../../../api/api";
import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
} from "../../../types/contractor_contact_data";
//fetch contacts

export const updateContractorContactsForGreen = (id:number,formData:any) => async (dispatch: Dispatch<ContractorContactDataAction>) => {

    try {
        const {data} = await contractorApi.changeContactEmployeesData(id, formData)
        dispatch({type:ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID,
            payload:data?.contact})

    }catch (e:any) {
        console.log(e.response)
    }
}
