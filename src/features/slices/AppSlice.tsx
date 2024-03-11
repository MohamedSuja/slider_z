/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ErrorFlash} from '@/utils/flashMessage';
import {Constants} from '@/utils/constants';
import IAppState from '../redux_models/App-Modal';
import {requestStorageData} from '../thunks/appThunk';
import {STATUS} from '../status_constants';

const DEFAULT_STATE: IAppState = {
  appSliceStatus: undefined,

  storageData: [],
  storageStatus: undefined,
};

const INITIAL_STATE: IAppState = {
  ...DEFAULT_STATE,
};

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    resetApp: () => {
      return DEFAULT_STATE;
    },
    setSwitchedEmail: (state: IAppState, action) => {
      return {...state, switchedEmail: action.payload};
    },
  },

  extraReducers: builder => {
    // 1
    // GET ALL - AgentCooperateSender
    builder.addCase(requestStorageData.pending, (state: IAppState) => {
      state.appSliceStatus = STATUS.LOADING;
      state.storageStatus = STATUS.LOADING;
    });
    builder.addCase(
      requestStorageData.fulfilled,
      (state: IAppState, action: any) => {
        state.storageData = action.payload;
        state.appSliceStatus = STATUS.SUCCEEDED;
        state.storageStatus = STATUS.SUCCEEDED;
      },
    );
    builder.addCase(
      requestStorageData.rejected,
      (state: IAppState, action: any) => {
        state.appSliceStatus = STATUS.FAILED;
        state.storageStatus = STATUS.FAILED;
        ErrorFlash(action.payload);
      },
    );
    // End
  },
});

export const {resetApp, setSwitchedEmail} = appSlice.actions;

// RootReducer is connected
export const selectAppSliceStatus = (state: RootState) =>
  state.app.appSliceStatus;

export const selectStorageData = (state: RootState) => state.app.storageData;
export const selectStorageStatus = (state: RootState) =>
  state.app.storageStatus;

export default appSlice;
