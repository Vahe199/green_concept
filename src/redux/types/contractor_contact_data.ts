export interface ContractorContactDataState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum ContractorContactDataActionType {
  INSERT_CONTRACTOR_CONTACT_DATA = "INSERT_CONTRACTOR_CONTACT_DATA",
  INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS = "INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS",
  INSERT_CONTRACTOR_CONTACT_DATA_ERROR = "INSERT_CONTRACTOR_CONTACT_DATA_ERROR",
  INSERT_CONTRACTOR_CONTACT_DATA_PAGE = "INSERT_CONTRACTOR_CONTACT_DATA_PAGE",
}

interface InsertContractorContactDataAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA;
}
interface InsertContractorContactDataSuccessAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS;
}
interface InsertContractorContactDataErrorAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR;
  payload: string;
}

export type ContractorContactDataAction =
  | InsertContractorContactDataAction
  | InsertContractorContactDataSuccessAction
  | InsertContractorContactDataErrorAction;
