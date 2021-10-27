import {
  ContractorContactDataAction,
  ContractorContactDataActionType,
  ContractorContactDataState,
} from "../../../types/contractor_contact_data";

const initialState: ContractorContactDataState = {
  ContactPerson: [],
  NewContactPerson: [],
  PersonContact: {},
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
        ContactPerson: [],
        PersonContact: {},
        NewContactPerson: [],
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

    case ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_LIST_DATA:
      return {
        ...state,
        ContactPerson: action.payload,
        error: false,
        loading: false,
        success: false,
      };

    case ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_DATA_WITH_ID:
      return {
        ...state,
        PersonContact: action.payload,
        error: false,
        loading: false,
        success: false,
      };

    case ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR:
      return {
        ContactPerson: [],
        PersonContact: state.PersonContact,
        NewContactPerson: [],
        error: true,
        loading: true,
        success: false,
      };

    case ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE:
      return {
        ContactPerson: [],
        PersonContact: state.PersonContact,
        NewContactPerson: [],
        error: false,
        loading: false,
        success: false,
      };

    default:
      return state;
  }
};
