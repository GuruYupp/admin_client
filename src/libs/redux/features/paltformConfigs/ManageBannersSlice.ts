import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';

interface WhoColumns {
  createdBy: string;
  createdDate: number; // Assuming this is a timestamp
  lastUpdatedBy: string;
  lastUpdatedDate: number; // Assuming this is a timestamp
}

interface Banner {
  networkId: number;
  priorityDate: number; // Assuming this is a timestamp
  name: string;
  isInternal: boolean;
  whoColumns: WhoColumns;
  geoRuleId: number;
  image: string;
  code: string;
  id: number;
  sourcePath: string;
  language: string; // You might want to define a specific type if this is a known set of languages
  bannerType: string; // Consider creating an enum if you have a limited set of types
  isActive: boolean;
  customAttributes: Record<string, any>; // You can specify a more detailed type if needed
  targetPath: string;
  startDate: number; // Assuming this is a timestamp
}

interface initialStateInterface {
  data: Banner[];
}

export const fetchBanners = createAsyncThunk(
  'platformConfig/fetchBanners',
  async (_args, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.searchBanner.initiate({
        params: { page: 0, pagesize: 50 },
        body: { networkId: '' },
      }),
    );
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  data: [],
};

const manageBannersSlice = createSlice({
  name: 'manageBanners',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.data = payload.response?.data as Banner[];
      }
    });
    builder.addCase(fetchBanners.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default manageBannersSlice.reducer;
