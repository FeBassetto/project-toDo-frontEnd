import IStateTask from "../../models/states/IStateTask";
import { taskTypes } from "../actions/taskActions";


const initialState: IStateTask = {
    tasks: [],
    concludedFilter: false,
    search: ''
}

export default function taskReducer(state = initialState, action: any) {
    switch (action.type) {
        case taskTypes.ADD_TO_REDUCER:
            return {
                ...action.payload.taskInfo
            }
        default:
            return state
    }
}