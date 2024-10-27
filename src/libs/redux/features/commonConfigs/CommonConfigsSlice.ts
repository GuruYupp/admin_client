import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ResourceProfileInterface,
  WhoColumnsInterface,
  responseInterface,
} from '@/global.types';
import { adminApis } from '../../apis/adminApis';
import { readFromLocalStorage, saveToLocalStorage } from '@/services/utils';

interface ContentPartnerInterface {
  name: string;
  priority: number;
  whoColumns: WhoColumnsInterface;
  description: string;
  joinedDate: number;
  code: string;
  id: number;
  isActive: boolean;
  customAttributes: Record<string, unknown>; // Adjust type as necessary
  title: string;
  urlMoniker: string;
  iconUrl: string;
}

interface initialStateInterface {
  networkList: ContentPartnerInterface[];
  resourceProfiles: ResourceProfileInterface[];
}

export const fetchNetworks = createAsyncThunk(
  'commonConfigs/fetchNetworks',
  async (_args, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      adminApis.endpoints.getChannels.initiate({ page: 0, pagesize: 500 }),
    );
    return result.data as responseInterface;
  },
);

export const fetchResourceProfiles = createAsyncThunk(
  'commonConfigs/fetchResourceProfiles',
  async (_args, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const localrpstr = readFromLocalStorage('resourceProfiles');
    let localrp: any;
    if (!!localrpstr) {
      localrp = JSON.parse(localrpstr);
    }
    if (!!localrp && localrp?.expiryTime > new Date().getTime()) {
      return localrp.data as ResourceProfileInterface;
    } else {
      // Call the RTK Query endpoint directly
      const result = await dispatch(
        adminApis.endpoints.getResourceProfiles.initiate({}),
      );
      return result.data as responseInterface;
    }
  },
);

const initialState: initialStateInterface = {
  networkList: [],
  resourceProfiles: [],
};

const commonConfigsSlice = createSlice({
  name: 'commonConfigs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNetworks.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload?.status === true && payload.response) {
          state.networkList = payload.response
            ?.data as ContentPartnerInterface[];
        }
      })
      .addCase(fetchNetworks.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(fetchResourceProfiles.fulfilled, (state, action) => {
        const { payload } = action;

        const response = payload as responseInterface;

        if (response?.status === true && response.response) {
          state.resourceProfiles = response.response
            .profiles as ResourceProfileInterface[];
          const expiryTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
          saveToLocalStorage(
            'resourceProfiles',
            JSON.stringify({ expiryTime, data: response.response.profiles }),
          );
        } else {
          const profiles = payload as unknown as ResourceProfileInterface[];
          if (profiles.length > 0) {
            state.resourceProfiles = profiles;
          }
        }
      });
  },
});

export default commonConfigsSlice.reducer;
