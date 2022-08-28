import IStateTask from "../../models/states/IStateTask"

interface IgetAllTasks {
    title: String,
    concluded: Boolean
}

export const taskTypes = {
    CREATE_TASK: 'task/CREATE_TASK',
    GET_ALL_TASKS: 'task/GET_ALL_TASKS',
    GET_TASK_BY_ID: 'task/GET_TASK_BY_ID',
    EDIT_TASK: 'task/EDIT_TASK',
    DELETE_TASK: 'task/DELETE_TASK',
    ADD_TO_REDUCER: 'task/ADD_TO_REDUCER'
}

export const taskActions = {
    createTask: (taskInfo: IStateTask) => ({
        type: taskTypes.CREATE_TASK,
        payload: {
            taskInfo
        }
    }),

    getAllTasks: (payload: IgetAllTasks) => ({
        type: taskTypes.GET_ALL_TASKS,
        payload: {
            payload
        }
    }),

    getTaskById: (id: String) => ({
        type: taskTypes.GET_TASK_BY_ID,
        payload: {
            id
        }
    }),

    editTask: (id: String) => ({
        type: taskTypes.EDIT_TASK,
        payload: {
            id
        }
    }),

    deleteTask: (id: String) => ({
        type: taskTypes.DELETE_TASK,
        payload: {
            id
        }
    }),

    addToReducer: (taskInfo: IStateTask) => ({
        type: taskTypes.ADD_TO_REDUCER,
        payload: {
            taskInfo
        }
    })
}