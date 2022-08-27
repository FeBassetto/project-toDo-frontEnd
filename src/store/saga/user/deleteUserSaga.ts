import { warningActions } from './../../actions/warningActions';
import { AxiosResponse } from 'axios';
import { userActions, userTypes } from './../../actions/userActions';
import { call, put, takeLatest } from "redux-saga/effects";
import api from '../../../services/api';
import { loadingActions } from '../../actions/loadingActions';


function* deleteUser({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        email,
        password
    } = payload

    try {

        const deleteUser: AxiosResponse = yield call(
            api.post,
            'user/login',
            {
                email,
                password
            }
        )

        const loginToken = deleteUser.data.token

        yield call(
            api.delete,
            'user/delete',
            {
                headers: {
                    Authorization: `Bearer ${loginToken}`
                }
            }
        )

        yield put(userActions.addToReducer(
            {
                token: null,
                name: null,
                image: null,
                email: null,
                phone: null
            }))
        yield put(warningActions.setWarning({ type: 'success', message: 'Usuário deletado com sucesso!' }))
        yield put(loadingActions.setloading(false))

    } catch (err: any) {
        console.log(err)
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }

}

export default function* deleteUserSaga() {
    yield takeLatest(userTypes.DELETE_USER, deleteUser)
}