
export interface CounterpartiesState{
    contractors:any[];
    loading:boolean;
    error:null|string;
}

export enum CounterpartiesActionType{
    FETCH_COUNTERPARTIES_LIST =  "FETCH_COUNTERPARTIES_LIST",
    FETCH_COUNTERPARTIES_LIST_SUCCESS =  "FETCH_COUNTERPARTIES_LIST_SUCCESS",
    FETCH_COUNTERPARTIES_LIST_ERROR =  "FETCH_COUNTERPARTIES_LIST_ERROR",
    FETCH_COUNTERPARTIES_LIST_PAGE =  "FETCH_COUNTERPARTIES_LIST_PAGE"

}

interface FetchCounterpartiesAction{
    type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST;
}
interface FetchCounterpartiesSuccessAction{
    type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_SUCCESS;
    payload:any[];
}
interface FetchCounterpartiesErrorAction{
    type:CounterpartiesActionType.FETCH_COUNTERPARTIES_LIST_ERROR;
    payload:string;
}

export type CounterpartiesAction =
    FetchCounterpartiesAction
    | FetchCounterpartiesSuccessAction
    | FetchCounterpartiesErrorAction;
