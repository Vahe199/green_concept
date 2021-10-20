export interface EmployeesListState {
    employees: any[];
    employeeById: any[];
    loading: boolean;
    load_update: boolean;
    success:boolean | string;
    success_update:boolean | string;
    error: boolean | string;
}

export enum EmployeeListActionType {
    FETCH_EMPLOYEES_LIST = "FETCH_EMPLOYEES_LIST",
    UPDATE_EMPLOYEES_LIST = "UPDATE_EMPLOYEES_LIST",

    FETCH_EMPLOYEES_LIST_SUCCESS = "FETCH_EMPLOYEES_LIST_SUCCESS",
    FETCH_EMPLOYEE_BY_ID_SUCCESS = "FETCH_EMPLOYEE_BY_ID_SUCCESS",

    FETCH_EMPLOYEES_LIST_ERROR = "FETCH_EMPLOYEES_LIST_ERROR",
    UPDATE_EMPLOYEES_LIST_ERROR = "UPDATE_EMPLOYEES_LIST_ERROR",
    UPDATE_EMPLOYEES_EMPLOYEE_DATA = "UPDATE_EMPLOYEES_EMPLOYEE_DATA",
    UPDATE_EMPLOYEES_GENERAL_INFO = "UPDATE_EMPLOYEES_GENERAL_INFO",
    UPDATE_EMPLOYEES_ABOUT_INFO = "UPDATE_EMPLOYEES_ABOUT_INFO",
    RECOVERY_EMPLOYEES_STATE = "RECOVERY_EMPLOYEES_STATE",
}

interface FetchEmployeeListAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST;
}
interface UpdateEmployeeListAction {
    type: EmployeeListActionType.UPDATE_EMPLOYEES_LIST;
}

interface FetchEmployeeListErrorAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR;
    payload: string;
}

interface UpdateEmployeeListErrorAction {
    type: EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR;
    payload: string;
}
interface FetchEmployeeListSuccessAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST_SUCCESS;
    payload: any[];
}
interface FetchEmployeeByIdSuccessAction {
    type: EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS;
    payload: any[];
}
interface UpdateEmployeeDataByIdSuccessAction {
    type: EmployeeListActionType.UPDATE_EMPLOYEES_EMPLOYEE_DATA;
    payload: any[];
}
interface UpdateEmployeeGeneralInfoByIdSuccessAction {
    type: EmployeeListActionType.UPDATE_EMPLOYEES_GENERAL_INFO;
    payload: any[];
}
interface UpdateEmployeeAboutInfoByIdSuccessAction {
    type: EmployeeListActionType.UPDATE_EMPLOYEES_ABOUT_INFO;
    payload: any[];
}

interface RecoveryEmployeeListStateAction {
    type: EmployeeListActionType.RECOVERY_EMPLOYEES_STATE;
}

export type EmployeeListAction =
    | FetchEmployeeListAction
    | UpdateEmployeeListAction
    | UpdateEmployeeListErrorAction
    | FetchEmployeeListErrorAction
    | FetchEmployeeListSuccessAction
    | FetchEmployeeByIdSuccessAction
    | RecoveryEmployeeListStateAction
    | UpdateEmployeeDataByIdSuccessAction
    | UpdateEmployeeGeneralInfoByIdSuccessAction
    | UpdateEmployeeAboutInfoByIdSuccessAction;

