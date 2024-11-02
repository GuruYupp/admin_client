import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import { LiveTvGenresInterface } from '@/adminTypes/LiveTvGenresTypes';
interface initialStateInterface {
  genres: LiveTvGenresInterface[];
}

export const fetchLivetvGeners = createAsyncThunk<
  responseInterface,
  listGenreparamsInterface | undefined
>(
  'platformConfig/fetchLivetvGeners',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listGenre.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  genres: [],
};

const liveTvGenresSlice = createSlice({
  name: 'liveTvGenres',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLivetvGeners.fulfilled, (state, action) => {
      const { payload } = action;
      if (payload?.status === true && payload.response) {
        state.genres = payload.response?.data as LiveTvGenresInterface[];
      }
    });
    builder.addCase(fetchLivetvGeners.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default liveTvGenresSlice.reducer;
