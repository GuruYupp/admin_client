import { PortalTypes } from '../../dashboardmenu.types';

const portals: {
  [key in PortalTypes]: {
    code: PortalTypes;
    text: string;
  };
} = {
  'content': { code: 'content', text: 'Content Configurations' },
  'subscriber': { code: 'subscriber', text: 'Support Operations' },
  'site_config': { code: 'site_config', text: 'Platform Configurations' },
  'reports': { code: 'reports', text: 'Reports' },
  'analytics': { code: 'analytics', text: 'Analytics' },
};

export default portals;
