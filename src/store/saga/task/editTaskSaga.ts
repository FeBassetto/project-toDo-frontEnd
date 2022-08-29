import { taskActions } from './../../actions/taskActions';
import { select } from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { loadingActions } from './../../actions/loadingActions';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import { taskTypes } from '../../actions/taskActions';
import { warningActions } from '../../actions/warningActions';
import api from '../../../services/api';



function* editTask({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        id,
        title,
        description,
        concluded,
        limitDate
    } = payload

    const token: string = yield select(state => state.userReducer.token)

    let requestBody: Object = {}

    if (title) {
        requestBody = { title }
    }

    if (description) {
        requestBody = { ...requestBody, description }
    }

    if (limitDate) {
        requestBody = {
            ...requestBody, limitDate
        }
    }

    if (concluded === true || concluded === false) {
        requestBody = { ...requestBody, concluded }
    }

    try {

        yield call(
            api.patch,
            `task/edit/${id}`,
            {
                ...requestBody
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        yield put(taskActions.getAllTasks())
        yield put(warningActions.setWarning({ type: 'success', message: 'Task modificada com sucesso!' }))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }

}


export default function* editTaskSaga() {
    yield takeLatest(taskTypes.EDIT_TASK, editTask)
}