/* eslint-disable @typescript-eslint/no-explicit-any */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {requestStorageDataService} from '../services/appService';

// 1
// GET ALL - AgentCooperateSender
export const requestStorageData = createAsyncThunk(
  '@/AgentCooperateSender/getAllAgentCooperateSender',
  async (param: string, {rejectWithValue}) => {
    try {
      const response = await requestStorageDataService(param);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  },
);
// End
