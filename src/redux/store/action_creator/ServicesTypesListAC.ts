import { Dispatch } from "redux";
import {ServicesTypesListAction, ServicesTypesListActionType} from "../../types/conterpart_services_types_list";
import {counterpartiesApi} from "../../../api/api";


export const fetchServicesTypesList =
  () => async (dispatch: Dispatch<ServicesTypesListAction>) => {
    try {
      dispatch({ type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST });
      const { data } = await counterpartiesApi.fetchContractorsServicesTypes();
      dispatch({
        type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ServicesTypesListActionType.FETCH_SERVICES_TYPES_LIST_ERROR,
        payload: "Error Happened Conterparties TYPES List Is Fallen",
      });
    }
  };
