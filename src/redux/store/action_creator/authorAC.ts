import { Dispatch } from "redux";
import {AuthorDataAction, AuthorDataActionType} from "../../types/conterpart_author_data";


export const getAuthorData = (data:any[]) =>  (dispatch: Dispatch<AuthorDataAction>) => {
debugger
    console.log(data,'autorarr')
      dispatch({
        type: AuthorDataActionType.GET_AUTHOR_DATA,
        payload: data
      });

  };
