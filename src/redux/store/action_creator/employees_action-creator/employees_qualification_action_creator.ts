import {Dispatch} from "redux";
import {employeesApi} from "../../../../api/api";
import {
    EmployeeQualificationListAction,
    EmployeeQualificationListActionType
} from "../../../types/employees_list_type/employees_qualification_list";


export const updateEmployeeQualificationDataAC = (formData:any ,id:number) => async (dispatch: Dispatch<EmployeeQualificationListAction>) => {
debugger
    try {
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST})
        const {data} = await employeesApi.updateEmployeeEducationsById(id, formData)
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS, payload:data})
    }catch (e:any) {
    console.log(e.response)
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR,payload:"что-то пошло не так"})
    }
}
export const updateEmployeeSkillsDataAC = (formData:any ,id:number) => async (dispatch: Dispatch<EmployeeQualificationListAction>) => {
debugger
    try {
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST})
        const {data} = await employeesApi.updateEmployeeSkillsById(id, formData)
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS, payload:data})
    }catch (e:any) {
    console.log(e.response)
        dispatch({type:EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR,payload:"что-то пошло не так"})
    }
}



export const recoveryEmployeesQualificationState = () => ({type:EmployeeQualificationListActionType.RECOVERY_EMPLOYEES_QUALIFICATION_STATE})
