import {Dispatch} from "redux";
import {employeesApi} from "../../../../api/api";
import {EmployeeAssetsAction, EmployeeAssetsActionType} from "../../../types/employees_list_type/employees_assets_type";

export const getEmployeeAssetsAC = () => async (dispatch: Dispatch<EmployeeAssetsAction>) => {
debugger
    try {
        dispatch({type:EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST})
        const {data} = await employeesApi.getEmployeesAssets()
         dispatch({type:EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_SUCCESS, payload:data})
    }catch (e) {
        dispatch({type:EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_ERROR,payload:"что-то пошло не так"})
    }
}

