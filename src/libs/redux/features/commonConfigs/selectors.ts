import { RootState } from '../../store';

export const selectNetworkList = (state: RootState) =>
  state.commonConfigs.networkList;
