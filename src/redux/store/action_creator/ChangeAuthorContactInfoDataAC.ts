import { Dispatch } from "redux";
import {AuthorDataAction, AuthorDataActionType} from "../../types/conterpart_author_data";
import {counterpartiesApi} from "../../../api/api";


export const changeAuthorContactInfoData = (formData:any, id:number,errorMessage:string) =>  async (dispatch: Dispatch<AuthorDataAction>) => {
   debugger
    try {
        dispatch({
            type: AuthorDataActionType.CHANGE_AUTHOR_DATA});
        const {data} = await counterpartiesApi.changeContractorsContactInfoData(formData,id)
      dispatch({
        type: AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS,
        payload: data.contractor
      });
    }catch (e) {
           dispatch({
               type: AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR,
               payload:'"что-то пошло не так !"',
               errorMsg:errorMessage
           });
    }


  };
