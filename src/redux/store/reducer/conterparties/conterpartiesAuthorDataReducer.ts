import {AuthorDataAction, AuthorDataActionType, AuthorDataState} from "../../../types/conterpart_author_data";


const initialState: AuthorDataState = {
  AuthorData:[],
  // author:[],
// branches:[],
// crms: [],
// emails: [],
// group:[],
// phones: [],
// service: [],
// sites: [],
};
export const counterpartiesAuthorDataReducer = (
  state = initialState,
  action: AuthorDataAction
): AuthorDataState => {
  switch (action.type) {
    case AuthorDataActionType.GET_AUTHOR_DATA:
      return {AuthorData:action.payload,
        // author:action.author,
        // branches:action.payload.branches,
        // crms:action.payload.crms,
        // emails:action.payload.emails,
        // group:action.payload.group,
        // phones:action.payload.phones,
        // service:action.payload.service,
        // sites:action.payload.sites



      };

    default:
      return state;
  }
};
