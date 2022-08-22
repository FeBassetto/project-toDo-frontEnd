import ITheme from "../../models/ITheme"
import { Types } from "../actions/thtemeAction"

const initialState: ITheme = {
    theme: 'lightMode'
}

export default function themeReducer(state = initialState, action: any) {

    switch (action.type) {
        case Types.CHANGE_COLOR:
            return {
                theme: action.payload.color
            }
        default:
            return state
    }

}

