import {combineReducers} from '@reduxjs/toolkit';
import { SLICE_NAME } from './constant';
import emergencyListEntity from './splices/emergency-list-entity';
import authentication from './splices/auth-entity'

/**
 * Combine all reducers and return a ReducersMapObject
 * @return { ReducersMapObject }
 */
export default combineReducers({
  [SLICE_NAME.AUTH]: authentication,
  [SLICE_NAME.EMERGENCY_TASK_LIST]: emergencyListEntity
});
