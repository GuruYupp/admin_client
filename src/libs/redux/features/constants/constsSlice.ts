import { validClientType } from '@/global.types';
import { getadminAsyncConstants } from '@/services/utils';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface constantsStateInterface {
  [key: string]: any;
}

export const setAdminConstants = createAsyncThunk<
  constantsStateInterface,
  validClientType
>('fetch/constants', async (client) => {
  const constants = await getadminAsyncConstants(client);
  return constants;
});

const initialState: constantsStateInterface = {};

const constantsSlice = createSlice({
  name: 'constantsSlice',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      setAdminConstants.fulfilled,
      (state, action: PayloadAction<constantsStateInterface>) => {
        state = action.payload;
        return state;
      },
    );
  },
  initialState,
});

export default constantsSlice.reducer;
