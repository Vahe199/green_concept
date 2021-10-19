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
    loading: true,
};

export const employeesListReducer = (
    state = initialState,
    action: EmployeeListAction
):EmployeesListState => {
    switch (action.type) {
        case EmployeeListActionType.FETCH_EMPLOYEES_LIST:
            return { error:true, loading: true, employees:state.employees, employeeById:state.employeeById };

        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_SUCCESS:
            return { loading: false, error: false, employeeById:state.employeeById, employees: action.payload };

        case EmployeeListActionType.FETCH_EMPLOYEE_BY_ID_SUCCESS:
            return { loading: false, error: false, employees: state.employees, employeeById:action.payload};

        case EmployeeListActionType.FETCH_EMPLOYEES_LIST_ERROR:
            return { loading: false, error: action.payload, employees: state.employees, employeeById:state.employeeById };
        default:
            return state;
    }
};
