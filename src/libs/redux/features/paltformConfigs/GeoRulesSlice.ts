import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import { GeoRuleInterface } from '@/adminTypes/GeoRuleTypes';
import { GeoRuleparamsInterface } from '../../apis/apis';
interface initialStateInterface {
  georules: GeoRuleInterface[];
}

export const fetchGeoRules = createAsyncThunk<
  responseInterface,
  GeoRuleparamsInterface | undefined
>(
  'platformConfig/fetchGeoRules',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listGeoRules.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  georules: [],
};

const GeoRulesSlice = createSlice({
  name: 'GeoRules',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGeoRules.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.georules = payload.response?.data as GeoRuleInterface[];
      }
    });
    builder.addCase(fetchGeoRules.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default GeoRulesSlice.reducer;
