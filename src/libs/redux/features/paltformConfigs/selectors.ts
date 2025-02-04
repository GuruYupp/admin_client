import { RootState } from '../../store';

export const selectManageBanners = (state: RootState) =>
  state.platformConfigManageBanners.banners;

export const selectLiveTvGenres = (state: RootState) =>
  state.platformconfigLiveTvGenres.genres;

export const selectVodCategories = (state: RootState) =>
  state.platformconfigVodCategories.categories;

export const selectGeoRules = (state: RootState) =>
  state.platformconfigGeoRules.georules;

export const selectPlatfromLanguages = (state: RootState) =>
  state.platfromconfigLanguages.platformlanguages;

export const selectDisplayLanguages = (state: RootState) =>
  state.platfromconfigLanguages.displaylanguages;

export const selectLocalizationDisplayLanguages = (state: RootState) =>
  state.platfromconfigLocalization.displayLangs;

export const selectLocalizationDisplayLanguagesList = (state: RootState) =>
  state.platfromconfigLocalization.localizationList;
