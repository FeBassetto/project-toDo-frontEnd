import { warningActions } from './../../actions/warningActions';
import { AxiosResponse } from 'axios';
import { call } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { loadingActions } from './../../actions/loadingActions';
import { put } from 'redux-saga/effects';
import { taskActions, taskTypes } from './../../actions/taskActions';
import { takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

function* getAllTasks() {

    yield put(loadingActions.setloading(true))

    const title: String = yield select(state => state.taskReducer.search)
    const concluded: Boolean = yield select(state => state.taskReducer.concludedFilter)
    const token: string = yield select(state => state.userReducer.token)

    try {

        const allTasks: AxiosResponse = yield call(
            api.get,
            `task?title=${title}&concluded=${concluded}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        if (allTasks.data.tasks) {
            yield put(taskActions.addToReducer(allTasks.data.tasks))
        } else {
            yield put(taskActions.addToReducer(allTasks.data.filterTasks))
        }

        yield put(loadingActions.setloading(false))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }

}


export default function* getAllTasksSaga() {
    yield takeLatest(taskTypes.GET_ALL_TASKS, getAllTasks)
}