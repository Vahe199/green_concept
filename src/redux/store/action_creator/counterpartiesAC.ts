import {Dispatch} from "redux";
import {counterpartiesApi} from "../../../api/api";
import {CounterpartiesAction, CounterpartiesActionType} from "../../types/counterparties";




export const fetchCounterpartiesList = () => async(dispatch:Dispatch<CounterpartiesAction>)=>{
    console.log(4545)
        try{
            dispatch({type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST})
            const {data} = await counterpartiesApi.fetchContractorsList()
            console.log(data)
            dispatch({type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_SUCCESS, payload:data.contractors})
        }catch (e){
            dispatch({type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_ERROR,
                payload:"happened error home  list"})
        }

}

