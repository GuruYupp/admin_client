import {
  adminLoginUserDetailsInterface,
  featureType,
  portalType,
  portalsType,
  featuresType,
  // configurationType,
  // configurationsType
} from '@/global.types';
import {
  // getAllConfigurations,
  getAllFeatures,
  getAllPortalsData,
  readFromLocalStorage,
} from '@/services/utils';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  portals: portalsType[portalType][];
  features: featuresType[featureType][];
} = {
  portals: [],
  features: [],
};
const PortalsSlice = createSlice({
  initialState,
  name: 'portals',
  reducers: {
    setPortals: (state) => {
      const userDetailsstr = readFromLocalStorage('userDetails');
      if (userDetailsstr) {
        const userDetails: adminLoginUserDetailsInterface =
          JSON.parse(userDetailsstr);
        const allPortals = getAllPortalsData();
        const allFeatures = getAllFeatures();
        // const allConfigurations = getAllConfigurations();
        // let isMasteruser = false;
        let isSuperuser = false;
        userDetails?.roles.map((role) => {
          // if(role.code === 'master_user')isMasteruser=true;
          if (role.code === 'superuser') isSuperuser = true;
        });

        const avaliablePortals: portalsType[portalType][] = [];
        const avalibaleFeatures: featuresType[featureType][] = [];
        // const avalibaleConfigurations:configurationsType[configurationType][] = []

        if (isSuperuser) {
          Object.keys(allPortals).map((portalCode) => {
            avaliablePortals.push({
              ...allPortals[portalCode as portalType],
              shouldDisplay: true,
            });
          });

          Object.keys(allFeatures).map((featureCode) => {
            avalibaleFeatures.push({
              ...allFeatures[featureCode as featureType],
              shouldDisplay: true,
            });
          });
        } else {
          userDetails?.portals.map((portal) => {
            avaliablePortals.push({
              ...allPortals[portal.code as portalType],
              shouldDisplay: true,
            });
          });

          userDetails?.features.map((feature) => {
            avalibaleFeatures.push({
              ...allFeatures[feature.code as featureType],
              shouldDisplay: true,
            });
          });
        }

        Object.keys(allPortals).map((portalCode) => {
          if (allPortals[portalCode as portalType].shouldDisplay === true) {
            avaliablePortals.push({
              ...allPortals[portalCode as portalType],
              shouldDisplay: true,
            });
          }
        });

        Object.keys(allFeatures).map((featureCode) => {
          if (allFeatures[featureCode as featureType].shouldDisplay === true) {
            avalibaleFeatures.push({
              ...allFeatures[featureCode as featureType],
              shouldDisplay: true,
            });
          }
        });

        state.portals = [...avaliablePortals];
        state.features = [...avalibaleFeatures];
      }
    },
  },
});

export const { setPortals } = PortalsSlice.actions;
export default PortalsSlice.reducer;
