import IStateUser from "../../models/states/IStateUser";
import { userTypes } from "../actions/userActions";

const initialState: IStateUser = {
    token: null,
    name: null,
    image: null,
    email: null,
    phone: null,
}

export default function userReducer(state = initialState, action: any) {

    switch (action.type) {
        case userTypes.ADD_TO_REDUCER:
            return {
                ...action.payload.userInfo
            }
        default:
            return state
    }

}