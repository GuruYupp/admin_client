import { validClientType } from '@/global.types';
import herogotvConstants from './herogotv-constants';
import timesplayConstants from './timesplay-constants';
import defaultConstants from './yvs-constants';
const adminConstants = {
  getAsyncConstants: async (client?: validClientType) => {
    const tenant = client || 'herogotv';
    switch (tenant) {
      case 'herogotv':
        const herogotvConstants = await import('./herogotv-constants');
        return herogotvConstants.default;
      case 'timesplay':
        const timesplayConstants = await import('./timesplay-constants');
        return timesplayConstants.default;
      default:
        const defaultConstants = await import('./yvs-constants');
        return defaultConstants.default;
    }
  },
  getSyncConstants: (client?: validClientType) => {
    const tenant = client || 'herogotv';
    switch (tenant) {
      case 'herogotv':
        return herogotvConstants;
      case 'timesplay':
        return timesplayConstants;
      default:
        return defaultConstants;
    }
  },
};

adminConstants.getAsyncConstants =
  adminConstants.getAsyncConstants.bind(adminConstants);
adminConstants.getSyncConstants =
  adminConstants.getSyncConstants.bind(adminConstants);

export default adminConstants;
