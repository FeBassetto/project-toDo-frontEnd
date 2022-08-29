import { warningActions } from './../../actions/warningActions';
import { loadingActions } from './../../actions/loadingActions';
import { taskActions, taskTypes } from './../../actions/taskActions';
import { call, put, select, takeLatest } from "redux-saga/effects";
import api from '../../../services/api';


function* deleteTask({ payload }: any) {

    yield put(loadingActions.setloading(true))

    const {
        id
    } = payload

    const token: string = yield select(state => state.userReducer.token)

    try {

        yield call(
            api.delete,
            `task/delete/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        yield put(taskActions.getAllTasks())
        yield put(warningActions.setWarning({ type: 'success', message: 'Task deletada com sucesso!' }))

    } catch (err: any) {
        yield put(warningActions.setWarning({ type: 'error', message: err.response.data.message }))
        yield put(loadingActions.setloading(false))
    }


}

export default function* deleteTaskSaga() {
    yield takeLatest(taskTypes.DELETE_TASK, deleteTask)
}