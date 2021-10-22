import {AssetsListAction, AssetsListActionType, AssetsListState} from "../../../types/conterpart_assets_types_list";
import {
    EmployeeListAction,
    EmployeeListActionType,
    EmployeesListState
} from "../../../types/employees_list_type/employees_list_type";
import {
    EmployeeQualificationListAction,
    EmployeeQualificationListActionType,
    EmployeesQualificationListState
} from "../../../types/employees_list_type/employees_qualification_list";

const initialState: EmployeesQualificationListState = {
    employeesQualification:[],
    loading: false,
    success:false,
    error: false,
};

export const employeesQualificationReducer = (
    state = initialState,
    action: EmployeeQualificationListAction
):EmployeesQualificationListState => {
    switch (action.type) {
        case EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST:
            return { error:false,loading: true,success:state.success, employeesQualification:state.employeesQualification };

        case EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_SUCCESS:
            return { error:false,loading: false,success:true, employeesQualification:action.payload };

        case EmployeeQualificationListActionType.UPDATE_EMPLOYEES_QUALIFICATION_LIST_ERROR:
            return { error:true,loading: false,success:false, employeesQualification: state.employeesQualification};

        case EmployeeQualificationListActionType.RECOVERY_EMPLOYEES_QUALIFICATION_STATE:
            return { error:false,loading: false,success:false, employeesQualification: state.employeesQualification};
      default:
            return state;
    }
};
