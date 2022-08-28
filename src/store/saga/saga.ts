import { all, fork } from 'redux-saga/effects'
import editUserSaga from './user/editUserSaga'
import getUserSaga from './user/getUserSaga'
import loginUserSaga from './user/loginUserSaga'
import registerUserSaga from './user/registerUserSaga'
import deleteUserSaga from './user/deleteUserSaga'
import createtaskSaga from './task/createTaskSaga'

export default function* saga() {
    yield all([
        fork(registerUserSaga),
        fork(loginUserSaga),
        fork(getUserSaga),
        fork(editUserSaga),
        fork(deleteUserSaga),
        fork(createtaskSaga)
    ])
}