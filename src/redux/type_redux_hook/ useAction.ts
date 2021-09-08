import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import  ActionCreators from "../store/action_creator"

export const UseActions =()=>{
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}
