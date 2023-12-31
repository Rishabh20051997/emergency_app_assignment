import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

/**
 * Function which is used to combine the root reducer and clear the redux
 * @param state
 * @param action
 * @returns
 */
const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return reducer(state, action);
};

const middleware = [
  /* other middleware */
  // apiMiddleware,
];

if (__DEV__) {
  // only for development version
}
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  // prepend and concat calls can be chained
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
