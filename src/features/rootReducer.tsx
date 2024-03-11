import {combineReducers} from '@reduxjs/toolkit';
import appSlice from './slices/AppSlice';

const rootReducer = combineReducers({
  app: appSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
