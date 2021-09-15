import {AssetsListAction, AssetsListActionType, AssetsListState} from "../../../types/conterpart_assets_types_list";


const initialState: AssetsListState = {
  assets: [],
  error: false,
  load: true,
};
export const counterpartiesAssetsListReducer = (
  state = initialState,
  action: AssetsListAction
): AssetsListState => {
  switch (action.type) {
    case AssetsListActionType.GET_ASSETS_LIST:
      return { error:true, load: true, assets: [] };
    case AssetsListActionType.GET_ASSETS_LIST_SUCCESS:
      return { load: false, error: false, assets: action.payload };
    case AssetsListActionType.GET_ASSETS_LIST_ERROR:
      return { load: false, error: action.payload, assets: [] };
    default:
      return state;
  }
};
