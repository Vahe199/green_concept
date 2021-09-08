import {Dispatch} from "redux";
import axios from "axios";
import {CategoriesAction, CategoriesActionType} from "../../types/new_contractor";


export const getCategories = () => async (dispatch:Dispatch<CategoriesAction>)=>{
        try{
            dispatch({type:CategoriesActionType.GET_CATEGORIES})
            const response = await axios.get('https://api.thecatapi.com/v1/categories');
            dispatch({type:CategoriesActionType.GET_CATEGORIES_SUCCESS, payload:response.data})
        }catch (e){
            dispatch({type:CategoriesActionType.GET_CATEGORIES_ERROR,
                payload:"happened error"})
        }

}
