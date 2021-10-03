import {
  ContractorBankDetailsActionType,
  ContractorBankDetailsState,
  ContractorBankDetailsAction,
} from "../../../types/contractor_bank_details";

const initialState: ContractorBankDetailsState = {
  data: [],
  error: null,
  loading: false,
};
export const contractorBankDetailsReducer = (
  state = initialState,
  action: ContractorBankDetailsAction
): ContractorBankDetailsState => {
  switch (action.type) {
    case ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS:
    case ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_ERROR:
    case ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_ERROR:
      return {
        ...state,
        data: [],
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
