export interface ItaskInfos {
    title: String | null,
    description: String | null,
    concluded: Boolean
}

export default interface IStateTask {
    tasks: Array<ItaskInfos> | null,
    concludedFilter: Boolean,
    search: String | null,
    taskById: null
}