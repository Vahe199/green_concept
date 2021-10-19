export interface EmployeesListState {
    employees: any[];
    employeeById: any[];
    loading: boolean;
    error: boolean | string;
}

export enum EmployeeListActionType {
    FETCH_EMPLOYEES_LIST = "FETCH_EMPLOYEES_LIST",
    FETCH_EMPLOYEES_LIST_SUCCESS = "FETCH_EMPLOYEES_LIST_SUCCESS",
    FETCH_EMPLOYEE_BY_ID_SUCCESS = "FETCH_EMPLOYEE_BY_ID_SUCCESS",
    FETCH_EMPLOYEES_LIST_ERROR = "FETCH_EMPLOYEES_LIST_ERROR",
}

interface FetchEmployeeListAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST;
}
interface FetchEmployeeListSuccessAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST_SUCCESS;
    payload: any[];
}
interface FetchEmployeeByIdSuccessAction {
    type: EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS;
    payload: any[];
}
interface FetchEmployeeListErrorAction {
    type: EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR;
    payload: string;
}

export type EmployeeListAction =
    | FetchEmployeeListAction
    | FetchEmployeeListSuccessAction
    | FetchEmployeeByIdSuccessAction
    | FetchEmployeeListErrorAction;
