import { userActions } from './../../actions/userActions';
import { warningActions } from './../../actions/warningActions';
import { AxiosResponse } from 'axios';
import { loadingActions } from './../../actions/loadingActions';
import { call, put, takeLatest } from "redux-saga/effects";
import { userTypes } from "../../actions/userActions";
import api from '../../../services/api';


function* loginUser({ payload }: any) {

    yield put(loadingActions.setloading(true))


    const {
        email,
        password
    } = payload.userInfo

    try {

        const loginUser: AxiosResponse = yield call(
            api.post,
            'user/login',
            {
                email,
                password
            }
        )

        const token = loginUser.data.token

        yield put(userActions.getUser(token))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }


}

export default function* loginUserSaga() {
    yield takeLatest(userTypes.LOGIN_USER, loginUser)
}