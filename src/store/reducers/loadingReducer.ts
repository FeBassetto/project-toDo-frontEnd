import { loadingTypes } from "../actions/loadingActions"


const initialState = {
    loading: false
}

export default function loadingReducer(state = initialState, action: any) {

    switch (action.type){
        case loadingTypes.SET_LOADING:
            return{
                loading: action.payload
            }
        default:
            return state
    }

}