import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import { SLICE_NAME } from '../constant/slice-constant';

//Slice => reducer and actions
const slice = createSlice({
  name: SLICE_NAME.AUTH,
  initialState: <Authentication>{
    data: {
      isLoggedIn: false,
    },
  },
  reducers: {
    updateIsLoggedIn: (authentication, action) => {
      authentication.data.isLoggedIn = true;
    },
    updateIsLoggedOut: (authentication, action) => {
      authentication.data.isLoggedIn = false;
    },
  },
});
const {
  updateIsLoggedIn,
  updateIsLoggedOut,
} = slice.actions;

export default slice.reducer;



/**
 *
 * @returns used to update the logged in status
 */
export const updateLoggedIn = () => (dispatch: Dispatch) =>
  dispatch({
    type: updateIsLoggedIn.type,
    payload: {},
  });

/**
 *
 * @returns used to update the log out status
 */
export const updateLoggedOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: updateIsLoggedOut.type,
    payload: {},
  });
};


/**
 * get the logged in status
 */
export const getUserLoggedInStatus = createSelector(
  (state: RootState) => state.auth,
  (isLoggedIn: Authentication) => isLoggedIn.data.isLoggedIn,
);