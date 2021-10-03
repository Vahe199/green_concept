export interface ContractorGeneralDataState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum ContractorGeneralDataActionType {
  INSERT_CONTRACTOR_GENERAL_DATA = "INSERT_CONTRACTOR_GENERAL_DATA",
  INSERT_CONTRACTOR_GENERAL_DATA_SUCCESS = "INSERT_CONTRACTOR_GENERAL_DATA_SUCCESS",
  INSERT_CONTRACTOR_GENERAL_DATA_ERROR = "INSERT_CONTRACTOR_GENERAL_DATA_ERROR",
  INSERT_CONTRACTOR_GENERAL_DATA_PAGE = "INSERT_CONTRACTOR_GENERAL_DATA_PAGE",
}

interface InsertContractorGeneralDataAction {
  type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA;
}
interface InsertContractorGeneralDataSuccessAction {
  type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA_SUCCESS;
}
interface InsertContractorGeneralDataErrorAction {
  type: ContractorGeneralDataActionType.INSERT_CONTRACTOR_GENERAL_DATA_ERROR;
  payload: string;
}

export type ContractorGeneralDataAction =
  | InsertContractorGeneralDataAction
  | InsertContractorGeneralDataSuccessAction
  | InsertContractorGeneralDataErrorAction;
