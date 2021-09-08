

export interface CategoriesState{
    categories:any[];
    loading:boolean;
    error:null|string;
}

export enum CategoriesActionType{
    GET_CATEGORIES =  "GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS =  "GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_ERROR =  "GET_CATEGORIES_ERROR"

}

interface FetchCategoriesAction{
    type:CategoriesActionType.GET_CATEGORIES;
}
interface FetchCategoriesSuccessAction{
    type:CategoriesActionType.GET_CATEGORIES_SUCCESS;
    payload:any[];
}
interface FetchUCategoriesErrorAction{
    type:CategoriesActionType.GET_CATEGORIES_ERROR;
    payload:string;
}

export type CategoriesAction = FetchCategoriesAction | FetchCategoriesSuccessAction | FetchUCategoriesErrorAction;