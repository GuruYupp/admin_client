import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import { adminApis } from '@/libs/redux/apis/adminApis';
import constsSlice from './features/constants/constsSlice';
import portalsSlice from './features/portals/portalsSlice';

export const makeStore = () => {
  const Store = configureStore({
    reducer: {
      authState: authSlice,
      constsants: constsSlice,
      portals: portalsSlice,
      [adminApis.reducerPath]: adminApis.reducer,
    },
    middleware: (getDefalutMiddelware) =>
      getDefalutMiddelware().concat(adminApis.middleware),
  });
  return Store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
