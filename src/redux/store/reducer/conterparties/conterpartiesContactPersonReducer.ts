import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
  ContractorContactDataState,
} from "../../../types/contractor_contact_data";

const initialState: ContractorContactDataState = {
  ContactList: [],
  NewContactPerson: [],
  contractor_contacts: [],
  loading: false,
  error: false,
  success: false,
};
export const counterpartiesContactPersonReducer = (
  state = initialState,
  action: ContractorContactDataAction
): ContractorContactDataState => {
  switch (action.type) {
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };

    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS:
      return {
        ...state,
        NewContactPerson: action.payload,
        error: false,
        loading: false,
        success: true,
      };
    case ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_LIST_SUCCESS:
      return {
        ...state,
        ContactList: action.payload,
        error: false,
        loading: false,
        success: true,
      };
    case ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID:
      return {
        ...state,
        contractor_contacts: action.payload,
        error: false,
        loading: false,
        success: true,
      };
    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_LIST_DATA:
      return {
        ...state,
        error: false,
        loading: true,
        success: false,
      };

    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: true,
        success: false,
      };

    case ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE:
      return { ...state, error: false, loading: false, success: false };

    default:
      return state;
  }
};
