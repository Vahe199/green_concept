export interface EmployeesQualificationListState {
    employeesQualification: any[];
    loading: boolean;
    success:boolean | string;
    error: boolean | string;
}

export enum EmployeeQualificationListActionType {
    UPDATE_EMPLOYEES_QUALIFICATION_LIST = "UPDATE_EMPLOYEES_QUALIFICATION_LIST",
    UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS = "UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS",
    UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR = "UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR",
    RECOVERY_EMPLOYEES_QUALIFICATION_STATE = "RECOVERY_EMPLOYEES_QUALIFICATION_STATE",
}


interface RecoveryEmployeeQualificationState {
    type: EmployeeQualificationListActionType.RECOVERY_EMPLOYEES_QUALIFICATION_STATE;
}
interface UpdateEmployeeQualificationListAction {
    type: EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST;
}

interface UpdateEmployeeQualificationListErrorAction {
    type: EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR;
    payload: string | boolean;
}

interface UpdateEmployeeQualificationListSuccessAction {
    type: EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS;
    payload: any[];
}

export type EmployeeQualificationListAction =
    | RecoveryEmployeeQualificationState
    | UpdateEmployeeQualificationListAction
    | UpdateEmployeeQualificationListErrorAction
    | UpdateEmployeeQualificationListSuccessAction;

