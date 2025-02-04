import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import {
  DisplayLanguagesparamsInterface,
  PlatformLanguagesparamsInterface,
} from '../../apis/apis';
import {
  DisplayLanguagesInterface,
  platformLanguagesInterface,
} from '@/adminTypes/Languages';
interface initialStateInterface {
  platformlanguages: platformLanguagesInterface[];
  displaylanguages: DisplayLanguagesInterface[];
}

export const fetchPlatformLanguages = createAsyncThunk<
  responseInterface,
  PlatformLanguagesparamsInterface | undefined
>(
  'platformConfig/fetchPlatformLanguages',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listPlatformLanguages.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

export const fetchDisplayLanguages = createAsyncThunk<
  responseInterface,
  DisplayLanguagesparamsInterface | undefined
>(
  'platformConfig/fetchDisplayLanguages',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listDisplayLanguages.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  platformlanguages: [],
  displaylanguages: [],
};

const LanguagesSlice = createSlice({
  name: 'Languages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPlatformLanguages.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.platformlanguages = payload.response
          ?.data as platformLanguagesInterface[];
      }
    });
    builder.addCase(fetchPlatformLanguages.rejected, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchDisplayLanguages.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.displaylanguages = payload.response
          ?.data as DisplayLanguagesInterface[];
      }
    });
    builder.addCase(fetchDisplayLanguages.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default LanguagesSlice.reducer;
