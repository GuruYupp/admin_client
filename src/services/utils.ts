import {  configurationsType, portalsType, validClientType } from '@/global.types';
import adminConstants from '@/configs/admin-constants/admin-constants';

export const getHeaders = () => {};

export const getadminConstants = async (client?: validClientType) => {
  const tenant_constants = await adminConstants.getConstants(client);
  return tenant_constants;
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



export const getAllPortalsData= () => {
  const portals:portalsType = {
    'content': { code: 'content', text: 'Content Configurations' },
    'subscriber': { code: 'subscriber', text: 'Support Operations' },
    'site_config': { code: 'site_config', text: 'Platform Configurations' },
    'reports': { code: 'reports', text: 'Reports' },
    'analytics': { code: 'analytics', text: 'Analytics' },
  };
  return portals;
};

export const getAllFeatures = ()=>{

}

export const getAllConfigurations= () => {
  const configurations:configurationsType = {
    'platform_operations':{
      code:'platform_operations',
      portal_code:'content',
      text:'Platform Operations'
    },
    'content_management':{
      code:'content_management',
      portal_code:'content',
      text:'Content Management'
    },
    'social_connect':{
      code:'social_connect',
      portal_code:'content',
      text:'Social Connect'
    },
    'custom_data':{
      code:'custom_data',
      portal_code:'content',
      text:'Custom Data'
    },
    'partner_integrations':{
      code:'partner_integrations',
      portal_code:'content',
      text:'Partner Integrations'
    },
    'admin_users_logs':{
      code:'admin_users_logs',
      portal_code:'content',
      text:'Admin Users / Logs'
    },
  };
  return configurations;
};