export interface ContractorContactDataState {
  ContactList: any[];
  NewContactPerson: any[];
  contractor_contacts:any[];
  loading: boolean;
  error: boolean | string;
  success: boolean | string;
}

export enum ContractorContactDataActionType {
  INSERT_CONTRACTOR_CONTACT_DATA = "INSERT_CONTRACTOR_CONTACT_DATA",
  INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS = "INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS",

  SET_CONTRACTOR_CONTACT_LIST_SUCCESS = "SET_CONTRACTOR_CONTACT_LIST_SUCCESS",

  INSERT_CONTRACTOR_CONTACT_DATA_ERROR = "INSERT_CONTRACTOR_CONTACT_DATA_ERROR",
  GET_CONTRACTOR_CONTACT_LIST_DATA = "GET_CONTRACTOR_CONTACT_LIST_DATA",
  INSERT_CONTRACTOR_CONTACT_LIST_DATA = "INSERT_CONTRACTOR_CONTACT_LIST_DATA",
  GET_CONTRACTOR_CONTACT_DATA_WITH_ID = "GET_CONTRACTOR_CONTACT_DATA_WITH_ID",
  SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID = "SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID",
  RECOVERY_CONTRACTOR_CONTACT_DATA_STATE = "RECOVERY_CONTRACTOR_CONTACT_DATA_STATE",
}

interface InsertContractorContactDataAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA;
}
interface InsertContractorContactDataSuccessAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS;
  payload: any[];
}
interface fetchContractorContactListDataSuccessAction {
  type: ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_LIST_SUCCESS;
  payload: any[];
}

interface fetchContractorContactDataByContractorIdSuccessAction {
  type: ContractorContactDataActionType.SET_CONTRACTOR_CONTACT_DATA_BY_CONTRACTOR_ID;
  payload: any[]; success: boolean
}

interface InsertContractorContactDataErrorAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_DATA_ERROR;
  payload: string | boolean;
}
interface InsertContactPersonsListAction {
  type: ContractorContactDataActionType.INSERT_CONTRACTOR_CONTACT_LIST_DATA;
}
interface GetContactPersonsListAction {
  type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_LIST_DATA;
  payload: any[];
}
interface GetContactPersonsListWithIdAction {
  type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_DATA_WITH_ID;
  payload: { [key: string]: any };
}
interface RecoveryState {
  type: ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE;
}

export type ContractorContactDataAction =
  | InsertContractorContactDataAction
  | InsertContractorContactDataSuccessAction
  | fetchContractorContactListDataSuccessAction
  | InsertContractorContactDataErrorAction
  | InsertContactPersonsListAction
  | GetContactPersonsListAction
  | GetContactPersonsListWithIdAction
  | fetchContractorContactDataByContractorIdSuccessAction
  | RecoveryState;
