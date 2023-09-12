interface ITaskListState {
    list: {
        data?: ITaskItem[],
        message?: string,
        status?: boolean
    }
}

interface ITaskItem {
    _id: string
    noticeTime: string
    respondTime: string
}