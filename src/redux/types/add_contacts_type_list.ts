export interface AddContactsStateList {
    contacts: any[];
    loading: boolean;
    error: null | string;
}

export enum AddContactsListActionType {
    ADD_CONTACTS_LIST_DATA = "ADD_CONTACTS_LIST_DATA",
    ADD_CONTACTS_LIST_DATA_SUCCESS = "ADD_CONTACTS_LIST_DATA_SUCCESS",
    ADD_CONTACTS_LIST_DATA_ERROR = "ADD_CONTACTS_LIST_DATA_ERROR",
}

interface AddContactsListDataAction {
    type: AddContactsListActionType.ADD_CONTACTS_LIST_DATA;
}
interface AddContactsListSuccessAction {
    type: AddContactsListActionType.ADD_CONTACTS_LIST_DATA_SUCCESS;
    payload: any[];
}
interface AddContactsListErrorAction {
    type: AddContactsListActionType.ADD_CONTACTS_LIST_DATA_ERROR;
    payload: string;
}

export type ContractorContactDataAction =
    | AddContactsListDataAction
    | AddContactsListSuccessAction
    | AddContactsListErrorAction;
