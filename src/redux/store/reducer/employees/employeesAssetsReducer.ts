import {
    EmployeeAssetsAction,
    EmployeeAssetsActionType,
    EmployeesAssetsState
} from "../../../types/employees_list_type/employees_assets_type";

const initialState: EmployeesAssetsState = {
    employees_assets:[],
    success:false,
    error:false,
    loading:false
};

export const employeesAssetsReducer = (
    state = initialState,
    action: EmployeeAssetsAction
):EmployeesAssetsState => {
    switch (action.type) {
        case EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST:
            return { employees_assets:[],
                success:false,
                error:false,
                loading:true };
        case EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_SUCCESS:
            return { employees_assets:action.payload,
                success:true,
                error:false,
                loading:false };
        case EmployeeAssetsActionType.GET_EMPLOYEES_ASSETS_LIST_ERROR:
            return { employees_assets:[],
                success:false,
                error:true,
                loading:true };
 default:
            return state;
    }
};
