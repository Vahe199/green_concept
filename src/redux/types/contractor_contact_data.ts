import {getContactPersonsListData} from "../store/action_creator/ContractorContactAC";

export interface ContractorContactDataState {
  ContactPerson:any[];
  NewContactPerson:any[];
  PersonContact:any[];
  loading: boolean;
  error: boolean | string;
  success:boolean | string;
}

export enum ContractorContactDataActionType {
  INSERT_CONTRACTOR_CONTACT_DATA = "INSERT_CONTRACTOR_CONTACT_DATA",
  INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS = "INSERT_CONTRACTOR_CONTACT_DATA_SUCCESS",
  INSERT_CONTRACTOR_CONTACT_DATA_ERROR = "INSERT_CONTRACTOR_CONTACT_DATA_ERROR",
  GET_CONTRACTOR_CONTACT_LIST_DATA = "GET_CONTRACTOR_CONTACT_LIST_DATA",
  GET_CONTRACTOR_CONTACT_DATA_WITH_ID = "GET_CONTRACTOR_CONTACT_DATA_WITH_ID",
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
interface GetContactPersonsListAction {
  type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_LIST_DATA;
  payload: any[] ;
}
interface GetContactPersonsListWithIdAction {
  type: ContractorContactDataActionType.GET_CONTRACTOR_CONTACT_DATA_WITH_ID;
  payload: any[] ;
}
interface RecoveryState {
  type: ContractorContactDataActionType.RECOVERY_CONTRACTOR_CONTACT_DATA_STATE
}

export type ContractorContactDataAction =
  | InsertContractorContactDataAction
  | InsertContractorContactDataSuccessAction
  | InsertContractorContactDataErrorAction
  |GetContactPersonsListAction
  |GetContactPersonsListWithIdAction
  | RecoveryState;
