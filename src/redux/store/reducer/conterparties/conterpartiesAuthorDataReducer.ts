import {AuthorDataAction, AuthorDataActionType, AuthorDataState} from "../../../types/conterpart_author_data";


const initialState: AuthorDataState = {
  AuthorData:[],
  loading:true,
  error:false,
  success:false,
  isChange:false
};
export const counterpartiesAuthorDataReducer = (
  state = initialState,
  action: AuthorDataAction
): AuthorDataState => {
  switch (action.type) {
    case AuthorDataActionType.GET_AUTHOR_DATA:
      return {AuthorData:action.payload,isChange:false,
        error:false,loading:false,success:false};
    case AuthorDataActionType.CHANGE_AUTHOR_DATA:
      return {...state,AuthorData:state.AuthorData,error:false,loading:true,isChange:false};
    case AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS:
      debugger
      return {AuthorData:action.payload, success:true,isChange:true,
        error:false,loading:false};
    case AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR:
      return {...state,AuthorData:state.AuthorData,success:false,isChange:false,
        error:"что-то пошло не так !",
        loading:false}
    case AuthorDataActionType.RECOVERY_AUTHOR_DATA_STATE:
      return {
        ...state,AuthorData:state.AuthorData,success:false,isChange:false,error:false
      }

    default:
      return state;
  }
};
