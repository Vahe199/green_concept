import {AuthorDataAction, AuthorDataActionType, AuthorDataState} from "../../../types/conterpart_author_data";


const initialState: AuthorDataState = {
  AuthorData:[],
  loading:true,
  error:false,
  success:false,
  isChange:false,
  errorMsg:false
};
export const counterpartiesAuthorDataReducer = (
  state = initialState,
  action: AuthorDataAction
): AuthorDataState => {
  switch (action.type) {

    case AuthorDataActionType.GET_AUTHOR_DATA:
      return {AuthorData:action.payload,isChange:false,errorMsg:false,
        error:false,loading:false,success:false};

    case AuthorDataActionType.CHANGE_AUTHOR_DATA:
      return {...state,AuthorData:state.AuthorData,error:false,loading:true,isChange:false,errorMsg:false};

    case AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS:
      return {AuthorData:action.payload, success:true,isChange:true,errorMsg:false,
        error:false,loading:false};

    case AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR:
      return {...state,AuthorData:state.AuthorData,success:false,isChange:false,errorMsg:action.errorMsg,
        error:action.payload,
        loading:false}

    case AuthorDataActionType.RECOVERY_AUTHOR_DATA_STATE:
      return {
        ...state,AuthorData:state.AuthorData,success:false,isChange:false,error:false,errorMsg:false
      }

    default:
      return state;
  }
};
