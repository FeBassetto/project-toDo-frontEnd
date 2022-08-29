import IStateTask from "../../models/states/IStateTask";
import { taskTypes } from "../actions/taskActions";


const initialState: IStateTask = {
    tasks: null,
    concludedFilter: false,
    search: '',
    taskById: null
}

export default function taskReducer(state = initialState, action: any) {
    switch (action.type) {
        case taskTypes.ADD_TO_REDUCER:
            return {
                ...state,
                tasks: [
                    ...action.payload.tasks
                ]
            }
        case taskTypes.ADD_FILTER:
            return {
                ...state,
                search: action.payload.search,
                concludedFilter: action.payload.concludedFilter
            }
        default:
            return state
    }
}