import {
  CategoriesAction,
  CategoriesActionType,
  CategoriesState,
} from "../../../types/new_contractor";

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const newContractorReducer = (
  state = initialState,
  action: CategoriesAction
): CategoriesState => {
  switch (action.type) {
    case CategoriesActionType.GET_CATEGORIES:
      return { loading: true, error: null, categories: [] };
    case CategoriesActionType.GET_CATEGORIES_SUCCESS:
      return { loading: false, error: null, categories: action.payload };
    case CategoriesActionType.GET_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, categories: [] };
    default:
      return state;
  }
};
