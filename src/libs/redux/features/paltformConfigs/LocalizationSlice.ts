import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { platformConfigadminApis } from '../../apis/platformConfigadminApis';
import { responseInterface } from '@/global.types';
import { LocalizationparamsInterface } from '../../apis/apis';

interface displayLanguageInterface {
  code: string;
  id: number;
  isActive: boolean;
  name: string;
  priority: number;
}
export interface localizationItemInterface {
  code: string;
  [key: string]: string;
}
interface initialStateInterface {
  displayLangs: displayLanguageInterface[];
  localizationList: {
    items: { data: localizationItemInterface }[];
    headers: string[];
  };
}

export const fetchLocalizationList = createAsyncThunk<
  responseInterface,
  LocalizationparamsInterface | undefined
>(
  'platformConfig/fetchLocalizationList',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.listLocalization.initiate({
        ...params,
      }),
    );
    return result.data as responseInterface;
  },
);

export const fetchLocalizationDisplayLangs = createAsyncThunk<
  responseInterface,
  LocalizationparamsInterface | undefined
>(
  'platformConfig/fetchLocalizationDisplayLangs',
  async (params = { page: 0, pagesize: 50 }, thunkAPI) => {
    const { dispatch } = thunkAPI;
    // Call the RTK Query endpoint directly
    const result = await dispatch(
      platformConfigadminApis.endpoints.LocalizationDisplayLangs.initiate({
        ...params,
      }),
    );
    dispatch(fetchLocalizationList());
    return result.data as responseInterface;
  },
);

const initialState: initialStateInterface = {
  displayLangs: [],
  localizationList: {
    headers: [],
    items: [],
  },
};

const LocalizationSlice = createSlice({
  name: 'Localization',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocalizationList.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload?.status === true && payload.response) {
          state.localizationList =
            payload.response as initialStateInterface['localizationList'];
        }
      })
      .addCase(fetchLocalizationList.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(fetchLocalizationDisplayLangs.fulfilled, (state, action) => {
        const { payload } = action;
        if (payload?.status === true && payload.response) {
          state.displayLangs = payload.response
            .data as displayLanguageInterface[];
        }
      })
      .addCase(fetchLocalizationDisplayLangs.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default LocalizationSlice.reducer;
