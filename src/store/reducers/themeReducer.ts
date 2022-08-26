import ITheme from "../../models/states/IStateTheme"
import { Types } from "../actions/themeActions"

const initialState: ITheme = {
    lightMode: true
}

export default function themeReducer(state = initialState, action: any) {

    switch (action.type) {
        case Types.CHANGE_THEME:
            return {
                lightMode: action.payload.lightMode
            }
        default:
            return state
    }

}

