import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
  ContractorContactDataState
} from "../../../types/contractor_contact_data";


const initialState: ContractorContactDataState = {
  ContactPerson:[],
  UpdateContactPerson:[],
  loading:false,
  error: false,
  success:false
};
export const counterpartiesContactPersonReducer = (
  state = initialState,
  action: ContractorContactDataAction
): ContractorContactDataState => {
  switch (action.type) {
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA:
      return {ContactPerson:[],UpdateContactPerson:[],
        error:false,loading:true,success:false};
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS:
      return {...state,ContactPerson:action.payload,UpdateContactPerson:[],
        error:false,loading:false,success:true};
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR:
      return {ContactPerson:[],UpdateContactPerson:[],
        error:true,loading:true,success:false};
      case ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE :
      return { ContactPerson:[],UpdateContactPerson:[],
        error:false,loading:false,success:false};
    default:
      return state;
  }
};
