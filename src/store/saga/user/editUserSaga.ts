import { loadingActions } from '../../actions/loadingActions';
import { warningActions } from '../../actions/warningActions';
import { AxiosResponse } from 'axios';
import { userActions, userTypes } from '../../actions/userActions';
import { call, put, select, takeLatest } from "redux-saga/effects"
import api from '../../../services/api';


function* editUser({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        name,
        email,
        noImage,
        image,
        phone,
        password,
        confirmpassword,
        token
    } = payload.userInfo

    const requestImage = noImage ? { noImage } : { image }

    try {

        yield call(
            api.patch,
            'user/edit',
            {
                name,
                ...requestImage,
                phone,
                email,
                password,
                confirmpassword
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }

        )


        yield put(userActions.getUser(token))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }
}

export default function* editUserSaga() {
    yield takeLatest(userTypes.EDIT_USER, editUser)
}