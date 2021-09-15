import {
  ServicesTypesListAction,
  ServicesTypesListActionType,
  ServicesTypesListState
} from "../../../types/conterpart_services_types_list";


const initialState: ServicesTypesListState = {
  servicesTypes: [],
  error: false,
  load: true,
};
export const counterpartiesServicesTypesListReducer = (
  state = initialState,
  action: ServicesTypesListAction
): ServicesTypesListState => {
  switch (action.type) {
    case ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST:
      return { error:true, load: true, servicesTypes: [] };
    case ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_SUCCESS:
      return { load: false, error: false, servicesTypes: action.payload };
    case ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_ERROR:
      return { load: false, error: action.payload, servicesTypes: [] };
    default:
      return state;
  }
};
