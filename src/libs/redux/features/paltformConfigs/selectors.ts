import { RootState } from '../../store';

export const selectManageBanners = (state: RootState) =>
  state.platformConfigManageBanners.banners;

export const selectLiveTvGenres = (state: RootState) =>
  state.platformconfigLiveTvGenres.genres;
