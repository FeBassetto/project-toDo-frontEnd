import IStateUser from "../../models/IStateUser";
import { userTypes } from "../actions/userActions";

const initialState: IStateUser = {
    token: null,
    name: null,
    image: null,
    email: null,
    phone: null
}

export default function userReducer(state = initialState, action: any) {

    switch (action.type) {
        default:
            return state
    }

}