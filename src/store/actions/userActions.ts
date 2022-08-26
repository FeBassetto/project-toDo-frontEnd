import IStateUser from "../../models/states/IStateUser"

export const userTypes = {
    REGISTER_USER: 'user/REGISTER_USER',
    LOGIN_USER: 'user/LOGIN_USER',
    GET_USER: 'user/GET_USER',
    EDIT_USER: 'user/EDIT_USER',
    DELETE_USER: 'user/DELETE_USER',
    ADD_TO_REDUCER: 'user/ADD_TO_REDUCER'
}

export const userActions = {
    registerUser: (userInfo: IStateUser) => ({
        type: userTypes.REGISTER_USER,
        payload: {
            userInfo
        }
    }),

    loginUser: (userInfo: IStateUser) => ({
        type: userTypes.LOGIN_USER,
        payload: {
            userInfo
        }
    }),

    getUser: (token: String) => ({
        type: userTypes.GET_USER,
        payload: {
            token
        }
    }),

    editUser: (userInfo: IStateUser) => ({
        type: userTypes.EDIT_USER,
        payload: {
            userInfo
        }
    }),

    deleteUser: () => ({
        type: userTypes.DELETE_USER,
        payload: {}
    }),

    addToReducer: (userInfo: IStateUser) => ({
        type: userTypes.ADD_TO_REDUCER,
        payload: {
            userInfo
        }
    })
}