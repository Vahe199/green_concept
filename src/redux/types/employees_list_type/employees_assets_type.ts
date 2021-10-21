export interface EmployeesAssetsState {
    employees_assets: any[];
    success:boolean | string;
    error: boolean | string;
    loading:boolean;
}

export enum EmployeeAssetsActionType {
    GET_EMPLOYEES_ASSETS_LIST = "GET_EMPLOYEES_ASSETS_LIST",

    GET_EMPLOYEES_ASSETS_LIST_SUCCESS = "GET_EMPLOYEES_ASSETS_LIST_SUCCESS",
    GET_EMPLOYEES_ASSETS_LIST_ERROR = "GET_EMPLOYEES_ASSETS_LIST_ERROR",
}

interface getEmployeeAssetsAction {
    type: EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST;
}


interface getEmployeeAssetsErrorAction {
    type: EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_ERROR;
    payload: string;
}

interface getEmployeeAssetsSuccessAction {
    type:EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_SUCCESS;
    payload: any[];
}

export type EmployeeAssetsAction =
    | getEmployeeAssetsAction
    | getEmployeeAssetsErrorAction
    | getEmployeeAssetsSuccessAction;

