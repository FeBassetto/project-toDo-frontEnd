import { warningActions } from './../../actions/warningActions';
import { loadingActions } from './../../actions/loadingActions';
import { put } from 'redux-saga/effects';
import { call } from 'redux-saga/effects';
import { taskActions, taskTypes } from './../../actions/taskActions';
import { select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';


function* createTask({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        title,
        description,
        limitDate
    } = payload.taskInfo

    const token: string = yield select(state => state.userReducer.token)

    try {

        yield call(
            api.post,
            'task/create',
            {
                title,
                description,
                limitDate
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        yield put(taskActions.getAllTasks())
        yield put(warningActions.setWarning({ type: 'success', message: 'Task criada com sucesso!' }))
        yield put(loadingActions.setloading(false))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }

}

export default function* createtaskSaga() {
    yield takeLatest(taskTypes.CREATE_TASK, createTask)
}