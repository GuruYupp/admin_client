import { RootState } from '../../store';

export const selectManageBanners = (state: RootState) =>
  state.platformConfigManageBanners.banners;

export const selectLiveTvGenres = (state: RootState) =>
  state.platformconfigLiveTvGenres.genres;

export const selectVodCategories = (state: RootState) =>
  state.platformconfigVodCategories.categories;

export const selectGeoRules = (state: RootState) =>
  state.platformconfigGeoRules.georules;
