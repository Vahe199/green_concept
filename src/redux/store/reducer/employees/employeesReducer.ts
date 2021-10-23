import {
    EmployeeListAction,
    EmployeeListActionType,
    EmployeesListState
} from "../../../types/employees_list_type/employees_list_type";

const initialState: EmployeesListState = {
    employeesData: [],
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
            return { error:false,success_update:state.success_update, load_update:false,loading: true,success:state.success, employeesData:state.employeesData, employeeById:state.employeeById };

        case EmployeeListActionType.UPDATE_EMPLOYEES_LIST:
            return { error:false, success_update:state.success_update,load_update:true,loading:state.loading,success:false, employeesData:state.employeesData, employeeById:state.employeeById };


        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_SUCCESS:
            return { loading: false,success_update:state.success_update,load_update:false, error: false,success:true, employeeById:state.employeeById, employeesData: action.payload };

        case EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS:
            return { loading: false,load_update:false,success_update:state.success_update, error: false,success:true, employeesData: state.employeesData, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_EMPLOYEE_DATA:
            return { loading: false,load_update:false, error: false,success_update:"EMPLOYEE_DATA",success:state.success, employeesData: state.employeesData, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_GENERAL_INFO:
            return { loading: false, load_update:false,error: false,success:state.success,success_update:"GENERAL_INFO", employeesData: state.employeesData, employeeById:action.payload};

        case EmployeeListActionType.UPDATE_EMPLOYEES_ABOUT_INFO:

            return { loading: false,load_update:false, error: false, success:state.success,success_update:"ABOUT_INFO",employeesData: state.employeesData, employeeById:action.payload};

        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR:
            return { loading: false, load_update:false,error: action.payload,success:false,success_update:false, employeesData: state.employeesData, employeeById:state.employeeById };

        case EmployeeListActionType.UPDATE_EMPLOYEES_LIST_ERROR:
            return { loading: false, load_update:false,error: action.payload, success:false,success_update:false, employeesData: state.employeesData, employeeById:state.employeeById };

            case EmployeeListActionType.RECOVERY_EMPLOYEES_STATE:
            return { loading: false, load_update:false,error: false,success_update:false, success:false,employeesData: state.employeesData, employeeById:state.employeeById };
        default:
            return state;
    }
};
