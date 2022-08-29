import { warningActions } from './../../actions/warningActions';
import { loadingActions } from './../../actions/loadingActions';
import { userActions, userTypes } from './../../actions/userActions';
import { call, put, takeLatest } from "redux-saga/effects";
import api from '../../../services/api';
import { AxiosResponse } from 'axios';

function* registerUser({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        name,
        image,
        phone,
        email,
        password,
        confirmpassword
    } = payload.userInfo

    let request: Object = {
        name,
        phone,
        email,
        password,
        confirmpassword
    }

    if(!(image.name.length < 1)){
        request = {...request, image}
    }

    try {
        const registerUser: AxiosResponse = yield call(
            api.post,
            'user/register',
            {
                ...request
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        yield put(userActions.addToReducer({ name, image, email, phone, token: registerUser.data.token }))
        yield put(warningActions.setWarning({ type: 'success', message: registerUser.data.message }))
        yield put(loadingActions.setloading(false))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }
}

export default function* registerUserSaga() {
    yield takeLatest(userTypes.REGISTER_USER, registerUser)
}