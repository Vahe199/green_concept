import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
  ContractorContactDataState
} from "../../../types/contractor_contact_data";


const initialState: ContractorContactDataState = {
  ContactPerson:[],
  NewContactPerson:[],
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
      return {ContactPerson:[],UpdateContactPerson:[], NewContactPerson:[],
        error:false,loading:true,success:false};
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS:
      return {...state,NewContactPerson:action.payload,ContactPerson: state.ContactPerson,UpdateContactPerson:[],
        error:false,loading:false,success:true};
      case ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_LIST_DATA:
      return {...state,NewContactPerson:state.NewContactPerson,ContactPerson:action.payload,UpdateContactPerson:[],
        error:false,loading:false,success:false};
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR:
      return {ContactPerson:[],UpdateContactPerson:[],NewContactPerson:[],
        error:true,loading:true,success:false};
      case ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE :
      return { ContactPerson:[],UpdateContactPerson:[],NewContactPerson:[],
        error:false,loading:false,success:false};
    default:
      return state;
  }
};
