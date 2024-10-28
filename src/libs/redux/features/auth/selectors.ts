import { RootState } from '../../store';

export const selectisLoggedIn = (state: RootState) =>
  state.authState.isLoggedin;
export const selectuserDetails = (state: RootState) =>
  state.authState.userDetails;
export const selectisMasterUser = (state: RootState) =>
  state.authState.isMasteruser;
export const selectisSuperUser = (state: RootState) =>
  state.authState.isSuperuser;
export const selectPortals = (state: RootState) => state.authState.portals;
export const selectActivePortal = (state: RootState) =>
  state.authState.activePortal;
export const selectActiveConfigurations = (state: RootState) =>
  state.authState.activeConfigurations;
export const selectFeatures = (state: RootState) => state.authState.features;
