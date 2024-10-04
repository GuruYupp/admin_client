import {
  configurationsType,
  featuresType,
  portalsType,
  validClientType,
} from '@/global.types';
import adminConstants from '@/configs/admin-constants/admin-constants';

export const getHeaders = () => {};

export const getadminConstants = async (client?: validClientType) => {
  const tenantConstants = await adminConstants.getConstants(client);
  return tenantConstants;
};

export const saveToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.log('setting item in local storage error', err);
  }
};

export const readFromLocalStorage = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.log('getting item in local storage error', err);
  }
};

export const getAllPortalsData = () => {
  const portals: portalsType = {
    'content': { code: 'content', text: 'Content Configurations' },
    'subscriber': { code: 'subscriber', text: 'Support Operations' },
    'site_config': { code: 'site_config', text: 'Platform Configurations' },
    'reports': { code: 'reports', text: 'Reports' },
    'analytics': { code: 'analytics', text: 'Analytics' },
  };
  return portals;
};

export const getAllFeatures = () => {
  /*eslint-disable camelcase */
  const features: featuresType = {
    'subscribers': {
      code: 'subscribers',
      text: ' Search User',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'webuser_creation': {
      code: 'webuser_creation',
      text: ' Create Web User ',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'content_feedback': {
      code: 'content_feedback',
      text: 'Feed Back',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'package_activation': {
      code: 'package_activation',
      text: 'Add Demo Package',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'paytm_manage': {
      code: 'paytm_manage',
      text: 'Paytm Manage',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'bulk_email': {
      code: 'bulk_email',
      text: 'Email',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'migrate_user': {
      code: 'migrate_user',
      text: 'Migrate User',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
    },
    'reporters_manage': {
      code: 'reporters_manage',
      text: ' Reporters Management',
      configuration_code: 'reporters_management',
      portal_code: 'subscriber',
    },
    'chat_monitoring': {
      code: 'chat_monitoring',
      text: 'Reporters Management',
      configuration_code: 'chat_management',
      portal_code: 'subscriber',
    },
    'qrcode': {
      code: 'qrcode',
      text: 'QR Code',
      configuration_code: 'qr_code_generation',
      portal_code: 'subscriber',
    },
  };
  /*eslint-enable camelcase */
  return features;
};

export const getAllConfigurations = () => {
  /*eslint-disable camelcase */
  const configurations: configurationsType = {
    'platform_operations': {
      code: 'platform_operations',
      portal_code: 'content',
      text: 'Platform Operations',
    },
    'content_management': {
      code: 'content_management',
      portal_code: 'content',
      text: 'Content Management',
    },
    'social_connect': {
      code: 'social_connect',
      portal_code: 'content',
      text: 'Social Connect',
    },
    'custom_data': {
      code: 'custom_data',
      portal_code: 'content',
      text: 'Custom Data',
    },
    'partner_integrations': {
      code: 'partner_integrations',
      portal_code: 'content',
      text: 'Partner Integrations',
    },
    'admin_users_logs': {
      code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Admin Users / Logs',
    },
    'subscribers_management': {
      code: 'subscribers_management',
      portal_code: 'subscriber',
      text: 'Subscribers Management',
    },
    'reporters_management': {
      code: 'reporters_management',
      portal_code: 'subscriber',
      text: 'Reporters Management',
    },
    'chat_management': {
      code: 'chat_management',
      portal_code: 'subscriber',
      text: 'Chat Management',
    },
    'qr_code_generation': {
      code: 'qr_code_generation',
      portal_code: 'subscriber',
      text: 'QR Code Generation',
    },
  };
  /*eslint-enable camelcase */
  return configurations;
};
