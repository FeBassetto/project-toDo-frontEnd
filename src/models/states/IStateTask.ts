export interface ItaskInfos{
    title: String | null,
    description: String | null,
    concluded: Boolean
}

export default interface IStateTask {
    tasks: Array<ItaskInfos>,
    concludedFilter: Boolean,
    search: String | null
}