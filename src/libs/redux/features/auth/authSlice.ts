import {
  adminLoginUserDetailsInterface,
  configurationType,
  configurationsType,
  featureType,
  featuresType,
  portalType,
  portalsType,
} from '@/global.types';
import {
  getAllConfigurations,
  getAllFeatures,
  getAllPortalsData,
  readFromLocalStorage,
  saveToLocalStorage,
} from '@/services/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface intialLoginState {
  isLoggedin: boolean;
  userDetails: adminLoginUserDetailsInterface | undefined;
  portals: portalsType[portalType][];
  isMasteruser: boolean;
  isSuperuser: boolean;
  features: featuresType[featureType][];
  configurations: configurationType[];
  activePortal: portalsType[portalType];
  activeConfigurations: configurationsType[configurationType][];
  // activeFeatures: featuresType[featureType][];
}

const initialState: intialLoginState = {
  isLoggedin: false,
  userDetails: undefined,
  portals: [],
  isMasteruser: false,
  isSuperuser: false,
  features: [],
  configurations: [],
  activePortal: {
    code: 'content',
    text: 'Content Configurations',
    shouldDisplay: false,
  },
  activeConfigurations: [],
  // activeFeatures:[]
};

const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    loginVerify: (state) => {
      const isLoggedin = readFromLocalStorage('isLoggedin');
      if (isLoggedin === 'true') {
        const userDetails = readFromLocalStorage('userDetails');
        if (userDetails) {
          state.userDetails = JSON.parse(userDetails);
          state.isLoggedin = true;
          state.userDetails?.roles.map((role) => {
            if (role.code === 'master_user') state.isMasteruser = true;
            else if (role.code === 'superuser') state.isSuperuser = true;
          });

          const allPortals = getAllPortalsData();
          state.portals = [];
          if (state.isSuperuser) {
            Object.keys(allPortals).map((portal) => {
              state.portals.push(allPortals[portal as portalType]);
            });
          } else {
            state.userDetails?.portals.map((portal) => {
              state.portals.push(allPortals[portal.code as portalType]);
            });
          }

          state.activePortal = state.portals[0];

          const allfeatures = getAllFeatures();
          state.features = [];
          if (state.isSuperuser) {
            Object.keys(allfeatures).map((feature) => {
              state.features.push(allfeatures[feature as featureType]);
            });
          } else {
            state.userDetails?.features.map((feature) => {
              state.features.push(allfeatures[feature.code as featureType]);
            });
          }

          // state.activeFeatures = state.features.filter(feature=>feature.portal_code === state.activePortal.code);
        }
      }
    },
    UserLoginData: (
      state,
      action: PayloadAction<intialLoginState['userDetails']>,
    ) => {
      const userDetails = action.payload;
      state.isLoggedin = true;
      state.userDetails = userDetails;
      saveToLocalStorage('isLoggedin', 'true');
      saveToLocalStorage('userDetails', JSON.stringify(userDetails));
    },
    setConfigurations: (state) => {
      const { userDetails } = state;
      if (userDetails) {
        const allConfigurations = getAllConfigurations();
        state.activeConfigurations = [];
        state.configurations = [];
        Object.keys(allConfigurations).map((config) => {
          const features = allConfigurations[
            config as configurationType
          ].feature_codes.filter(
            // eslint-disable-next-line camelcase
            (feature_code) =>
              // eslint-disable-next-line camelcase
              state.features.filter((feature) => feature.code === feature_code)
                .length > 0 || state.isSuperuser,
          );
          if (features.length > 0) {
            state.configurations.push(
              allConfigurations[config as configurationType].code,
            );

            if (
              allConfigurations[config as configurationType].portal_code ===
              state.activePortal.code
            ) {
              state.activeConfigurations.push(
                allConfigurations[config as configurationType],
              );
            }
          }
        });
      }
    },
    updateConfigurations: (
      state,
      action: PayloadAction<portalsType[portalType]>,
    ) => {
      const { userDetails } = state;
      if (userDetails) {
        const { payload } = action;
        state.activePortal = payload;
        const allConfigurations = getAllConfigurations();
        state.activeConfigurations = [];
        state.configurations = [];
        Object.keys(allConfigurations).map((config) => {
          const features = allConfigurations[
            config as configurationType
          ].feature_codes.filter(
            // eslint-disable-next-line camelcase
            (feature_code) =>
              // eslint-disable-next-line camelcase
              state.features.filter((feature) => feature.code === feature_code)
                .length > 0 || state.isSuperuser,
          );
          if (features.length > 0) {
            state.configurations.push(
              allConfigurations[config as configurationType].code,
            );

            if (
              allConfigurations[config as configurationType].portal_code ===
              state.activePortal.code
            ) {
              state.activeConfigurations.push(
                allConfigurations[config as configurationType],
              );
            }
          }
        });
      }
    },
  },
});
export const {
  loginVerify,
  UserLoginData,
  setConfigurations,
  updateConfigurations,
} = authSlice.actions;
export default authSlice.reducer;
