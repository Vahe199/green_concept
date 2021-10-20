import {Dispatch} from "redux";
import {EmployeeListAction, EmployeeListActionType} from "../../../types/employees_list_type/employees_list_type";
import {employeesApi} from "../../../../api/api";

export const fetchEmployeeByIdtAC = (id:number) => async (dispatch: Dispatch<EmployeeListAction>) => {

    try {
        dispatch({type:EmployeeListActionType.FETCH_EMPLOYEES_LIST})
        const {data} = await employeesApi.getEmployeeDataById(id)
         dispatch({type:EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR,payload:"что-то пошло не так"})
    }
}

