import IStateTask, { ItaskInfos } from "../../models/states/IStateTask"

export const taskTypes = {
    CREATE_TASK: 'task/CREATE_TASK',
    GET_ALL_TASKS: 'task/GET_ALL_TASKS',
    GET_TASK_BY_ID: 'task/GET_TASK_BY_ID',
    EDIT_TASK: 'task/EDIT_TASK',
    DELETE_TASK: 'task/DELETE_TASK',
    ADD_TO_REDUCER: 'task/ADD_TO_REDUCER',
    ADD_FILTER: 'task/ADD_FILTER'
}

export const taskActions = {
    createTask: (taskInfo: IStateTask) => ({
        type: taskTypes.CREATE_TASK,
        payload: {
            taskInfo
        }
    }),

    getAllTasks: () => ({
        type: taskTypes.GET_ALL_TASKS,
        payload: {}
    }),

    getTaskById: (id: String) => ({
        type: taskTypes.GET_TASK_BY_ID,
        payload: {
            id
        }
    }),

    editTask: ({ id, concluded, title, description }: any) => ({
        type: taskTypes.EDIT_TASK,
        payload: {
            id,
            concluded,
            title,
            description
        }
    }),

    deleteTask: (id: String) => ({
        type: taskTypes.DELETE_TASK,
        payload: {
            id
        }
    }),

    addToReducer: (tasks: Array<ItaskInfos>) => ({
        type: taskTypes.ADD_TO_REDUCER,
        payload: {
            tasks
        }
    }),

    addFilters: ({ search, concludedFilter }: any) => ({
        type: taskTypes.ADD_FILTER,
        payload: {
            search,
            concludedFilter
        }
    })
}