import { Dispatch } from "redux";
import {AuthorDataAction, AuthorDataActionType} from "../../types/conterpart_author_data";
import {counterpartiesApi} from "../../../api/api";


export const changeAuthorData = (formData:any, id:number) =>  async (dispatch: Dispatch<AuthorDataAction>) => {
   debugger
    try {
        dispatch({
            type: AuthorDataActionType.CHANGE_AUTHOR_DATA});
        const {data} = await counterpartiesApi.changeContractorsData(formData,id)
      dispatch({
        type: AuthorDataActionType.CHANGE_AUTHOR_DATA_SUCCESS,
        payload: data.contractor
      });
    }catch (e) {
       let {response}:any = e
        console.log(response,'e error')
           dispatch({
               type: AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR,
               payload:'something went wrong'
           });
    }


  };
