import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import { adminApis } from '@/libs/redux/apis/adminApis';
import constsSlice from './features/constants/constsSlice';
import { platformConfigadminApis } from './apis/platformConfigadminApis';
import ManageBannersSlice from './features/paltformConfigs/ManageBannersSlice';
import CommonConfigsSlice from './features/commonConfigs/CommonConfigsSlice';
import LiveTvGenresSlice from './features/paltformConfigs/LiveTvGenresSlice';
import VodCategoriesSlice from './features/paltformConfigs/VodCategoriesSlice';
import GeoRulesSlice from './features/paltformConfigs/GeoRulesSlice';

export const makeStore = () => {
  const Store = configureStore({
    reducer: {
      authState: authSlice,
      constsants: constsSlice,
      platformConfigManageBanners: ManageBannersSlice,
      platformconfigLiveTvGenres: LiveTvGenresSlice,
      platformconfigVodCategories: VodCategoriesSlice,
      platformconfigGeoRules: GeoRulesSlice,
      commonConfigs: CommonConfigsSlice,
      [adminApis.reducerPath]: adminApis.reducer,
      [platformConfigadminApis.reducerPath]: platformConfigadminApis.reducer,
    },
    middleware: (getDefalutMiddelware) =>
      getDefalutMiddelware().concat(
        adminApis.middleware,
        platformConfigadminApis.middleware,
      ),
  });
  return Store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
