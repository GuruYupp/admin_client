import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
interface initialStateInterface {
  banners: BannerInterface[];
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
  banners: [],
};

const manageBannersSlice = createSlice({
  name: 'manageBanners',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.banners = payload.response?.data as BannerInterface[];
      }
    });
    builder.addCase(fetchBanners.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default manageBannersSlice.reducer;
