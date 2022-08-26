import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { loadingActions } from "../../actions/loadingActions";
import { userActions, userTypes } from "../../actions/userActions";
import { warningActions } from "../../actions/warningActions";

function* getUser({ payload }: any) {

    const {
        token
    } = payload

    try {

        const getUser: AxiosResponse = yield call(
            api.get,
            'user',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const {
            email,
            image,
            name,
            phone
        } = getUser.data.message

        yield put(userActions.addToReducer({ name, image, email, phone, token }))
        yield put(warningActions.setWarning({ type: 'success', message: 'Logado com sucesso!' }))
        yield put(loadingActions.setloading(false))

    } catch (err: any) {

        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }

}


export default function* getUserSaga() {
    yield takeLatest(userTypes.GET_USER, getUser)
}