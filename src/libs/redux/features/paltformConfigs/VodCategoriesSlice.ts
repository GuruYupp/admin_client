import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import { VodCategoriesInterface } from '@/adminTypes/VodCategoriesTypes';
import { VodCategoriesparamsInterface } from '../../apis/apis';
interface initialStateInterface {
  categories: VodCategoriesInterface[];
}

export const fetchVodCategories = createAsyncThunk<
  responseInterface,
  VodCategoriesparamsInterface | undefined
>(
  'platformConfig/fetchVodCategories',
  async (params = { page: 0, pagesize: 200 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listvodCategories.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  categories: [],
};

const VodCategoriesSlice = createSlice({
  name: 'vodCategories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVodCategories.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.categories = payload.response?.data as VodCategoriesInterface[];
      }
    });
    builder.addCase(fetchVodCategories.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default VodCategoriesSlice.reducer;
