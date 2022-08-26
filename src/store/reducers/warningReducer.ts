import { warningTypes } from './../actions/warningActions';
import IStateWarning from "../../models/states/IStateWarning"

const initialState: IStateWarning = {
    type: null,
    message: ''
}

export default function warningReducer(state = initialState, action: any) {

    switch (action.type) {
        case warningTypes.SET_WARNING:
            return {
                type: action.payload.warning.type,
                message: action.payload.warning.message
            }
        default:
            return state
    }

}