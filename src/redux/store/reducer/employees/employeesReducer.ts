import {AssetsListAction, AssetsListActionType, AssetsListState} from "../../../types/conterpart_assets_types_list";
import {
    EmployeeListAction,
    EmployeeListActionType,
    EmployeesListState
} from "../../../types/employees_list_type/employees_list_type";

const initialState: EmployeesListState = {
    employees: [],
    employeeById:[],
    error: false,
    success:false,
    success_update:false,
    loading: true,
    load_update:false,
};

export const employeesListReducer = (
    state = initialState,
    action: EmployeeListAction
):EmployeesListState => {
    switch (action.type) {
        case EmployeeListActionType.FETCH_EMPLOYEES_LIST:
            return { error:false,success_update:state.success_update, load_update:false,loading: true,success:state.success, employees:state.employees, employeeById:state.employeeById };

        case EmployeeListActionType.UPDATE_EMPLOYEES_LIST:
            return { error:false, success_update:state.success_update,load_update:true,loading:state.loading,success:false, employees:state.employees, employeeById:state.employeeById };


        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_SUCCESS:
            return { loading: false,success_update:state.success_update,load_update:false, error: false,success:true, employeeById:state.employeeById, employees: action.payload };

        case EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS:
            return { loading: false,load_update:false,success_update:state.success_update, error: false,success:true, employees: state.employees, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_EMPLOYEE_DATA:
            return { loading: false,load_update:false, error: false,success_update:"EMPLOYEE_DATA",success:state.success, employees: state.employees, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_GENERAL_INFO:
            return { loading: false, load_update:false,error: false,success:state.success,success_update:"GENERAL_INFO", employees: state.employees, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_ABOUT_INFO:

            return { loading: false,load_update:false, error: false, success:state.success,success_update:"ABOUT_INFO",employees: state.employees, employeeById:action.payload};

        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR:
            return { loading: false, load_update:false,error: action.payload,success:false,success_update:false, employees: state.employees, employeeById:state.employeeById };

        case EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR:
            return { loading: false, load_update:false,error: action.payload, success:false,success_update:false, employees: state.employees, employeeById:state.employeeById };

            case EmployeeListActionType.RECOVERY_EMPLOYEES_STATE:
            return { loading: false, load_update:false,error: false,success_update:false, success:false,employees: state.employees, employeeById:state.employeeById };
        default:
            return state;
    }
};
