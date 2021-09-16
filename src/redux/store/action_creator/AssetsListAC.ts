import { Dispatch } from "redux";
import { counterpartiesApi } from "../../../api/api";
import {AssetsListAction, AssetsListActionType} from "../../types/conterpart_assets_types_list";


export const getAssetsListData =
  () => async (dispatch: Dispatch<AssetsListAction>) => {
    try {
       dispatch({ type: AssetsListActionType.GET_ASSETS_LIST });
      const { data } = await counterpartiesApi.getAssetsData();
      console.log(data,'')
      dispatch({
        type: AssetsListActionType.GET_ASSETS_LIST_SUCCESS,
        payload: data.assets,
      });
    } catch (e) {
    let {response}:any = e
      console.log(response,'assets error')
      dispatch({
        type: AssetsListActionType.GET_ASSETS_LIST_ERROR,
        payload: "Произошла ошибка Список ТИПОВ КОНТРАКТОВ отсутствует",
      });
    }
  };
