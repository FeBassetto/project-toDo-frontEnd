import {all, fork} from 'redux-saga/effects'
import registerUserSaga from './user/registerUserSaga'

export default function* saga(){
    yield all([
        fork(registerUserSaga)
    ])
}