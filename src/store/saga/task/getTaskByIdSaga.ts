import { AxiosResponse } from 'axios';
import { call } from 'redux-saga/effects';
import { warningActions } from './../../actions/warningActions';
import { select } from 'redux-saga/effects';
import { loadingActions } from './../../actions/loadingActions';
import { put } from 'redux-saga/effects';
import { taskActions, taskTypes } from './../../actions/taskActions';
import { takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';



function* getTaskById({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const { id } = payload
    const token: string = yield select(state => state.userReducer.token)


    try {

        const task: AxiosResponse = yield call(
            api.get,
            `task/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        yield put(taskActions.addById(task.data.task))
        yield put(loadingActions.setloading(false))


    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(taskActions.addById({ error: true }))
        yield put(loadingActions.setloading(false))
    }

}

export default function* getTaskByIdSaga() {
    yield takeLatest(taskTypes.GET_TASK_BY_ID, getTaskById)
}