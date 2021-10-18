import {Dispatch} from "redux";
import {AuthorDataAction, AuthorDataActionType} from "../../types/conterpart_author_data";
import {counterpartiesApi} from "../../../api/api";


export const getAuthorData = (id:number) =>  async (dispatch: Dispatch<AuthorDataAction>) => {
  try {
    dispatch({type:AuthorDataActionType.CHANGE_AUTHOR_DATA})
    const {data} = await counterpartiesApi.getContractorsDataWithId(id)

    dispatch({
      type: AuthorDataActionType.GET_AUTHOR_DATA,
      payload: data
    });
  }catch (e) {
    dispatch({type:AuthorDataActionType.CHANGE_AUTHOR_DATA_ERROR,payload:"errors", errorMsg:"errors"})
  }

  };
