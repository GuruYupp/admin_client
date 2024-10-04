import { RootState } from "../../store";

export const selectisLoggedIn = (state:RootState)=>state.authState.isLoggedin;
export const selectuserDetails = (state:RootState)=>state.authState.userDetails;
export const selectisMasterUser = (state:RootState)=>state.authState.isMasteruser;
export const selectisSuperUser = (state:RootState)=>state.authState.isSuperuser;
export const selectPortals = (state:RootState)=>state.authState.portals;