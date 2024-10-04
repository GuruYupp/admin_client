import { validClientType } from '@/global.types';

const adminConstants = {
  getConstants: async (client?: validClientType) => {
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
};

adminConstants.getConstants = adminConstants.getConstants.bind(adminConstants);

export default adminConstants;
