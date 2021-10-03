export interface ContractorBankDetailsState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum ContractorBankDetailsActionType {
  FETCH_CONTRACTOR_BANK_DETAILS = "FETCH_CONTRACTOR_BANK_DETAILS",
  FETCH_CONTRACTOR_BANK_DETAILS_SUCCESS = "FETCH_CONTRACTOR_BANK_DETAILS_SUCCESS",
  FETCH_CONTRACTOR_BANK_DETAILS_ERROR = "FETCH_CONTRACTOR_BANK_DETAILS_ERROR",
  FETCH_CONTRACTOR_BANK_DETAILS_PAGE = "FETCH_CONTRACTOR_BANK_DETAILS_PAGE",
  INSERT_CONTRACTOR_BANK_DETAILS = "INSERT_CONTRACTOR_BANK_DETAILS",
  INSERT_CONTRACTOR_BANK_DETAILS_SUCCESS = "INSERT_CONTRACTOR_BANK_DETAILS_SUCCESS",
  INSERT_CONTRACTOR_BANK_DETAILS_ERROR = "INSERT_CONTRACTOR_BANK_DETAILS_ERROR",
  INSERT_CONTRACTOR_BANK_DETAILS_PAGE = "INSERT_CONTRACTOR_BANK_DETAILS_PAGE",
  UPDATE_CONTRACTOR_BANK_DETAILS = "UPDATE_CONTRACTOR_BANK_DETAILS",
  UPDATE_CONTRACTOR_BANK_DETAILS_SUCCESS = "UPDATE_CONTRACTOR_BANK_DETAILS_SUCCESS",
  UPDATE_CONTRACTOR_BANK_DETAILS_ERROR = "UPDATE_CONTRACTOR_BANK_DETAILS_ERROR",
  UPDATE_CONTRACTOR_BANK_DETAILS_PAGE = "UPDATE_CONTRACTOR_BANK_DETAILS_PAGE",
}

interface FetchContractorBankDetailsAction {
  type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS;
}
interface FetchContractorBankDetailsSuccessAction {
  type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_SUCCESS;
  payload: any[];
}
interface FetchContractorBankDetailsErrorAction {
  type: ContractorBankDetailsActionType.FETCH_CONTRACTOR_BANK_DETAILS_ERROR;
  payload: string;
}

interface InsertContractorBankDetailsAction {
  type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS;
}
interface InsertContractorBankDetailsSuccessAction {
  type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_SUCCESS;
}
interface InsertContractorBankDetailsErrorAction {
  type: ContractorBankDetailsActionType.INSERT_CONTRACTOR_BANK_DETAILS_ERROR;
  payload: string;
}

interface UpdateContractorBankDetailsAction {
  type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS;
}
interface UpdateContractorBankDetailsSuccessAction {
  type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS_SUCCESS;
}
interface UpdateContractorBankDetailsErrorAction {
  type: ContractorBankDetailsActionType.UPDATE_CONTRACTOR_BANK_DETAILS_ERROR;
  payload: string;
}

export type ContractorBankDetailsAction =
  | FetchContractorBankDetailsAction
  | FetchContractorBankDetailsSuccessAction
  | FetchContractorBankDetailsErrorAction
  | InsertContractorBankDetailsAction
  | InsertContractorBankDetailsSuccessAction
  | InsertContractorBankDetailsErrorAction
  | UpdateContractorBankDetailsAction
  | UpdateContractorBankDetailsSuccessAction
  | UpdateContractorBankDetailsErrorAction;
