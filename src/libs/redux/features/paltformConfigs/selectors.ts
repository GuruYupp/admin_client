import { RootState } from '../../store';

export const selectManageBanners = (state: RootState) =>
  state.platformConfigManageBanners.banners;
