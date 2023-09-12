import {createSelector, createSlice} from '@reduxjs/toolkit';

import { SLICE_NAME } from '../constant';

const EMERGENCY_TASK_LIST = SLICE_NAME.EMERGENCY_TASK_LIST;

/**
 *
 * @param item task item received from server
 * @returns {ITaskItem} data required
 */
const formatTaskData = (noticeTime: string, respondTime: string) => {
  return {
    _id: (Math.random()).toString().substring(2),
    noticeTime,
    respondTime
  } as ITaskItem;
};




// called by dispatch to add new task
const onNewTaskAddApiFetchInitiateReducer = (
  taskListState: ITaskListState,
  {payload}: {payload: any}
) => {
    const { noticeTime, respondTime } = payload
    const newItem = formatTaskData(noticeTime, respondTime)
    taskListState.list.data = [...taskListState.list.data || [], newItem]
};


// slice definition of task list Slice
export const slice = createSlice({
  name: EMERGENCY_TASK_LIST,
  initialState: <ITaskListState>{
    list: {
        data:[],
        message: '',
        status: false
    }
  },
  reducers: {
        onNewTaskAdd: onNewTaskAddApiFetchInitiateReducer,
  },
});

/**** selector  Start *****/

/**
 * returns emergency task list list
 */
const getAllEmergencyTaskList = () =>
  createSelector(
    (store: RootState) => store[EMERGENCY_TASK_LIST],
    (state: ITaskListState) => {
      return state?.list?.data || [];
    },
);

/**
 * used to add new task
 * @param noticeTime time at which emergency received
 * @param respondTime time at which emergency responded
 * @returns 
 */
export const addNewTaskToEmergencyList = (noticeTime: string, respondTime: string) => (dispatch: Dispatch) => {
    dispatch({
      type: onNewTaskAdd.type,
      payload: {
        noticeTime,
        respondTime

      },
    });
  };


/*** Selector End ****/



const {
  onNewTaskAdd,
} =
  slice.actions;

export {
    getAllEmergencyTaskList,
};

export default slice.reducer;
