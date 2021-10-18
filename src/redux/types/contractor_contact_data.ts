export interface ContractorContactDataState {
  ContactPerson:any[];
  UpdateContactPerson:any[];
  loading: boolean;
  error: boolean | string;
  success:boolean | string;
}

export enum ContractorContactDataActionType {
  INSERT_CONTRACTOR_CONTACT_DATA = "INSERT_CONTRACTOR_CONTACT_DATA",
  INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS = "INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS",
  INSERT_CONTRACTOR_CONTACT_DATA_ERROR = "INSERT_CONTRACTOR_CONTACT_DATA_ERROR",
  RECOVERY_CONTRACTOR_CONTACT_DATA_STATE = "RECOVERY_CONTRACTOR_CONTACT_DATA_STATE",
}

interface InsertContractorContactDataAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA;
}
interface InsertContractorContactDataSuccessAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS;
  payload: any[]
}
interface InsertContractorContactDataErrorAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR;
  payload: string | boolean;
}
interface RecoveryState {
  type: ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE
}

export type ContractorContactDataAction =
  | InsertContractorContactDataAction
  | InsertContractorContactDataSuccessAction
  | InsertContractorContactDataErrorAction
  | RecoveryState;
