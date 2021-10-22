import {Dispatch} from "redux";
import {EmployeeListAction, EmployeeListActionType} from "../../../types/employees_list_type/employees_list_type";
import {employeesApi} from "../../../../api/api";



export const updateEmployeeEmployeeDataAC = (formData:any ,id:number) => async (dispatch: Dispatch<EmployeeListAction>) => {
    try {
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST})
        const {data} = await employeesApi.updateEmployeeDataById(id, formData)
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_EMPLOYEE_DATA, payload:data})
    }catch (e) {
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR,payload:"что-то пошло не так"})
    }
}

export const updateEmployeeAboutListAC = (formData:any ,id:number) => async (dispatch: Dispatch<EmployeeListAction>) => {
    try {
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST})
        const {data} = await employeesApi.updateEmployeeAboutInfoById(formData, id)
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_ABOUT_INFO, payload:data})
    }catch (e) {
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR,payload:"что-то пошло не так"})
    }
}
export const updateEmployeeGeneralListAC = (formData:any ,id:number) => async (dispatch: Dispatch<EmployeeListAction>) => {

    try {
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST})
        const {data} = await employeesApi.updateEmployeeGeneralInfoById(formData,id)
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_GENERAL_INFO, payload:data})
    }catch (e:any) {
        console.log(e.response)
        dispatch({type:EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR,payload:"что-то пошло не так"})
    }
}

export const recoveryEmployeesState = () => ({type:EmployeeListActionType.RECOVERY_EMPLOYEES_STATE})
