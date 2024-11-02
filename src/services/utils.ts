import {
  configurationsType,
  featuresType,
  portalsType,
  validClientType,
} from '@/global.types';
import adminConstants from '@/configs/admin-constants/admin-constants';
import { appConfigsInstance } from '@/appConfig';

export const getHeaders = () => {};

export const getadminAsyncConstants = async (client?: validClientType) => {
  const tenantConstants = await adminConstants.getAsyncConstants(client);
  return tenantConstants;
};

export const getadminSyncConstants = (client?: validClientType) => {
  const tenantConstants = adminConstants.getSyncConstants(client);
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
    'content': {
      code: 'content',
      text: 'Content Configurations',
      shouldDisplay: false,
    },
    'subscriber': {
      code: 'subscriber',
      text: 'Support Operations',
      shouldDisplay: false,
    },
    'site_config': {
      code: 'site_config',
      text: 'Platform Configurations',
      shouldDisplay: false,
    },
    'reports': { code: 'reports', text: 'Reports', shouldDisplay: false },
    'analytics': { code: 'analytics', text: 'Analytics', shouldDisplay: false },
  };
  return portals;
};

export const getAllFeatures = () => {
  /*eslint-disable camelcase */
  const features: featuresType = {
    subscribers: {
      code: 'subscribers',
      text: ' Search User',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/search-user',
      url: '/subscribers/search-user',
    },
    webuser_creation: {
      code: 'webuser_creation',
      text: ' Create Web User ',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/create-web-user',
      url: '/subscribers/create-web-user',
    },
    content_feedback: {
      code: 'content_feedback',
      text: 'Feed Back',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/feed-back-list',
      url: '/subscribers/feed-back-list',
    },
    package_activation: {
      code: 'package_activation',
      text: 'Add Demo Package',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/package-activation',
      url: '/subscribers/package-activation',
    },
    paytm_manage: {
      code: 'paytm_manage',
      text: 'Paytm Manage',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/paytm_manage',
      url: '/subscribers/paytm_manage',
    },
    bulk_email: {
      code: 'bulk_email',
      text: 'Email',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/bulkemail',
      url: '/subscribers/bulkemail',
    },
    migrate_user: {
      code: 'migrate_user',
      text: 'Migrate User',
      configuration_code: 'subscribers_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/migrate-user',
      url: '/subscribers/migrate-user',
    },
    reporters_manage: {
      code: 'reporters_manage',
      text: ' Reporters Management',
      configuration_code: 'reporters_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/reportermanage',
      url: '/reporter-management/reportermanage',
    },
    chat_monitoring: {
      code: 'chat_monitoring',
      text: 'Reporters Management',
      configuration_code: 'chat_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/reportermanage',
      url: '/reporter-management/reportermanage',
    },
    chat_history: {
      code: 'chat_history',
      text: 'Chat History',
      configuration_code: 'chat_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/chathistory',
      url: '/chat/chathistory',
    },
    blocked_users: {
      code: 'blocked_users',
      text: 'Blocked Users',
      configuration_code: 'chat_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/blockedUsers',
      url: '/chat/blockedUsers',
    },
    chat_users: {
      code: 'chat_users',
      text: 'Chat Users',
      configuration_code: 'chat_management',
      portal_code: 'subscriber',
      shouldDisplay: false,
    },
    qrcode: {
      code: 'qrcode',
      text: 'QR Code',
      configuration_code: 'qr_code_generation',
      portal_code: 'subscriber',
      shouldDisplay: false,
      relativeUrl: '/qrcode',
      url: '/qrcode',
    },
    banners: {
      code: 'banners',
      text: 'Banners',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
      relativeUrl: '/banners',
      url: '/platform-config/banners',
    },
    tv_genres: {
      code: 'tv_genres',
      text: 'Live TV Geners',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
      relativeUrl: '/live-tv-genres',
      url: '/platform-config/live-tv-genres',
    },
    categories: {
      code: 'categories',
      text: 'VOD Categories',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
    },
    geo_rule: {
      code: 'geo_rule',
      text: 'Geo & Device Filters',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
    },
    languages: {
      code: 'languages',
      text: 'Languages',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
    },
    localization: {
      code: 'localization',
      text: 'Localization',
      configuration_code: 'platform_operations',
      portal_code: 'content',
      shouldDisplay: false,
    },
    content_partner: {
      code: 'content_partner',
      text: 'Content Partners',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    content_channels: {
      code: 'content_channels',
      text: 'VOD',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    tv_channels: {
      code: 'tv_channels',
      text: 'Live Channels',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    webseries: {
      code: 'webseries',
      text: 'WebSeries',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    videos: {
      code: 'videos',
      text: 'Videos',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    movie: {
      code: 'movie',
      text: 'Movies',
      configuration_code: 'content_management',
      portal_code: 'content',
      shouldDisplay: false,
    },
    pending_channels: {
      code: 'content_channels',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Publish Approval',
      shouldDisplay: false,
    },
    tv_channel_changes: {
      code: 'tv_channel_changes',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Publish Approval',
      shouldDisplay: false,
    },
    bulk_upload_content: {
      code: 'tv_channel_changes',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Bulk upload',
      shouldDisplay: false,
    },
    bulk_upload_epg: {
      code: 'tv_channel_changes',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Bulk upload',
      shouldDisplay: false,
    },
    content_upload: {
      code: 'content_upload',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Encoded Streams',
      shouldDisplay: false,
    },
    artist: {
      code: 'artist',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Artists',
      shouldDisplay: false,
    },
    artist_role: {
      code: 'artist_role',
      configuration_code: 'content_management',
      portal_code: 'content',
      text: 'Artists',
      shouldDisplay: false,
    },
    socialConnect_platform: {
      code: 'socialConnect_platform',
      configuration_code: 'social_connect',
      portal_code: 'content',
      text: 'Destinations',
      shouldDisplay: false,
    },
    socialConnect_profiles: {
      code: 'socialConnect_profiles',
      configuration_code: 'social_connect',
      portal_code: 'content',
      text: 'Profiles',
      shouldDisplay: false,
    },
    socialConnect_publish: {
      code: 'socialConnect_publish',
      configuration_code: 'social_connect',
      portal_code: 'content',
      text: 'Publish',
      shouldDisplay: false,
    },
    week_list: {
      code: 'week_list',
      configuration_code: 'custom_data',
      portal_code: 'content',
      text: 'Custom_data',
      shouldDisplay: false,
    },
    seasonal_checklist: {
      code: 'seasonal_checklist',
      configuration_code: 'custom_data',
      portal_code: 'content',
      text: 'Seasonal Checklist',
      shouldDisplay: false,
    },
    partner_hoichoi: {
      code: 'partner_hoichoi',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Hoichoi',
      shouldDisplay: false,
    },
    partner_sonyliv: {
      code: 'partner_sonyliv',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'SonyLiv',
      shouldDisplay: false,
    },
    partner_lionsgate: {
      code: 'partner_lionsgate',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Lionsgate',
      shouldDisplay: false,
    },
    partner_ohogujarati: {
      code: 'partner_ohogujarati',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Oho Gujarati',
      shouldDisplay: false,
    },
    partner_epicon: {
      code: 'partner_epicon',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Epicon',
      shouldDisplay: false,
    },
    partner_hungama: {
      code: 'partner_hungama',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Hungama',
      shouldDisplay: false,
    },
    partner_klikk: {
      code: 'partner_klikk',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Klikk',
      shouldDisplay: false,
    },
    partner_hotstar: {
      code: 'partner_hotstar',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Hotstar',
      shouldDisplay: false,
    },
    partner_zee: {
      code: 'partner_zee',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Zee',
      shouldDisplay: false,
    },
    partner_manorama: {
      code: 'partner_manorama',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Manorama',
      shouldDisplay: false,
    },
    partner_shortstv: {
      code: 'partner_shortstv',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'ShortsTV',
      shouldDisplay: false,
    },
    partner_fancode: {
      code: 'partner_fancode',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'FanCode',
      shouldDisplay: false,
    },
    partner_rajtv: {
      code: 'partner_rajtv',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Raj TV',
      shouldDisplay: false,
    },
    partner_stage: {
      code: 'partner_stage',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Stage',
      shouldDisplay: false,
    },
    partner_tarang: {
      code: 'partner_tarang',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Tarang',
      shouldDisplay: false,
    },
    partner_aaonxt: {
      code: 'partner_aaonxt',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Aao NXT',
      shouldDisplay: false,
    },
    partner_etv: {
      code: 'partner_etv',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'ETV',
      shouldDisplay: false,
    },
    partner_gamezop: {
      code: 'partner_gamezop',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Gamezop',
      shouldDisplay: false,
    },
    partner_sanskar: {
      code: 'partner_sanskar',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Sanskar',
      shouldDisplay: false,
    },
    partner_shemarome: {
      code: 'partner_shemarome',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Shemarome',
      shouldDisplay: false,
    },
    partner_sunnxt: {
      code: 'partner_sunnxt',
      configuration_code: 'partner_integrations',
      portal_code: 'content',
      text: 'Sun NXT',
      shouldDisplay: false,
    },
    admin_users: {
      code: 'admin_users',
      configuration_code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Admin Users',
      shouldDisplay: false,
    },
    audit_log: {
      code: 'audit_log',
      configuration_code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Audit Logs',
      shouldDisplay: false,
    },
    movie_log: {
      code: 'movie_log',
      configuration_code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Assert Import Logs',
      shouldDisplay: false,
    },
    bulk_upload_history: {
      code: 'bulk_upload_history',
      configuration_code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Bulk Upload History',
      shouldDisplay: false,
    },
    sections: {
      code: 'sections',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Sections',
      shouldDisplay: false,
    },
    filter_definations: {
      code: 'filter_definations',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Filter Definitions',
      shouldDisplay: false,
    },
    coupon_info: {
      code: 'coupon_info',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Coupon Info',
      shouldDisplay: false,
    },
    offers: {
      code: 'offers',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Offers',
      shouldDisplay: false,
    },
    menus: {
      code: 'menus',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Menus',
      shouldDisplay: false,
    },
    pages: {
      code: 'pages',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Pages',
      shouldDisplay: false,
    },
    page_attribute: {
      code: 'page_attribute',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Page Attribute',
      shouldDisplay: false,
    },
    target_page: {
      code: 'target_page',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Target Pages',
      shouldDisplay: false,
    },
    content: {
      code: 'content',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Content',
      shouldDisplay: false,
    },
    dynamic_content: {
      code: 'dynamic_content',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Dynamic Content',
      shouldDisplay: false,
    },
    custom_object_list: {
      code: 'custom_object_list',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'Custom Object',
      shouldDisplay: false,
    },
    rss_feed_source_list: {
      code: 'rss_feed_source_list',
      portal_code: 'site_config',
      configuration_code: 'meta_data',
      text: 'RSS Feed Source',
      shouldDisplay: false,
    },
    country: {
      code: 'country',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Country',
      shouldDisplay: false,
    },
    currency: {
      code: 'currency',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Currency',
      shouldDisplay: false,
    },
    data_set: {
      code: 'data_set',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Data Set',
      shouldDisplay: false,
    },
    duration: {
      code: 'duration',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Duration',
      shouldDisplay: false,
    },
    parental_controls: {
      code: 'parental_controls',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Parental Controls',
      shouldDisplay: false,
    },
    user_emoji: {
      code: 'user_emoji',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'User Emoji',
      shouldDisplay: false,
    },
    playlist_group: {
      code: 'playlist_group',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Playlist Group',
      shouldDisplay: false,
    },
    predefined_playlist: {
      code: 'predefined_playlist',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Predefined Playlist',
      shouldDisplay: false,
    },
    device_type: {
      code: 'device_type',
      portal_code: 'site_config',
      configuration_code: 'meta_table',
      text: 'Device Type',
      shouldDisplay: false,
    },
    vouchers: {
      code: 'vouchers',
      portal_code: 'site_config',
      configuration_code: 'vouchers',
      text: 'Vouchers',
      shouldDisplay: false,
    },
    orange_carrier: {
      code: 'orange_carrier',
      portal_code: 'site_config',
      configuration_code: 'vouchers',
      text: 'Orange Carrier',
      shouldDisplay: false,
    },
    vocher_types: {
      code: 'vocher_types',
      portal_code: 'site_config',
      configuration_code: 'vouchers',
      text: 'Voucher Types',
      shouldDisplay: false,
    },
    generate_vouchers: {
      code: 'generate_vouchers',
      portal_code: 'site_config',
      configuration_code: 'vouchers',
      text: 'Generate Vouchers',
      shouldDisplay: false,
    },
    fetch_vouchers: {
      code: 'fetch_vouchers',
      portal_code: 'site_config',
      configuration_code: 'vouchers',
      text: 'Fetch Vouchers',
      shouldDisplay: false,
    },
    configuration: {
      code: 'configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Configurations',
      shouldDisplay: false,
    },
    service_configuration: {
      code: 'service_configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Service Configurations',
      shouldDisplay: false,
    },
    card_configuration: {
      code: 'card_configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Card Configurations',
      shouldDisplay: false,
    },
    field_configuration: {
      code: 'field_configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Field Configurations',
      shouldDisplay: false,
    },
    search_element: {
      code: 'search_element',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Search Elements',
      shouldDisplay: false,
    },
    stream_provider: {
      code: 'stream_provider',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Stream Providers',
      shouldDisplay: false,
    },
    stream_config: {
      code: 'stream_config',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Stream configurations',
      shouldDisplay: false,
    },
    admin_configuration: {
      code: 'admin_configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Admin Configurations',
      shouldDisplay: false,
    },
    system_feature: {
      code: 'system_feature',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'System Features',
      shouldDisplay: false,
    },
    resource_and_device_resource_profile: {
      code: 'resource_and_device_resource_profile',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Resource Profiles',
      shouldDisplay: false,
    },
    network_device_properties: {
      code: 'network_device_properties',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Network Device Properties',
      shouldDisplay: false,
    },
    page_event_configuration: {
      code: 'page_event_configuration',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Page Event Configuration',
      shouldDisplay: false,
    },
    custom_attribute: {
      code: 'custom_attribute',
      portal_code: 'site_config',
      configuration_code: 'configurations',
      text: 'Custom Attributes',
      shouldDisplay: false,
    },
    page_ad_provider: {
      code: 'page_ad_provider',
      configuration_code: 'ad_configuration',
      portal_code: 'site_config',
      text: 'AD Configuration',
      shouldDisplay: false,
    },
    seo: {
      code: 'seo',
      configuration_code: 'seo',
      portal_code: 'site_config',
      text: 'SEO',
      shouldDisplay: false,
    },
    roles: {
      code: 'roles',
      configuration_code: 'roles_and_features',
      portal_code: 'site_config',
      text: 'Roles',
      shouldDisplay: false,
    },
    features: {
      code: 'features',
      configuration_code: 'roles_and_features',
      portal_code: 'site_config',
      text: 'Features',
      shouldDisplay: false,
    },
    permissions: {
      code: 'permissions',
      configuration_code: 'roles_and_features',
      portal_code: 'site_config',
      text: 'Permissions',
      shouldDisplay: false,
    },
    master_packages: {
      code: 'master_packages',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Master Packages',
      shouldDisplay: false,
    },
    packages: {
      code: 'packages',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Packages',
      shouldDisplay: false,
    },
    cheddar_packages: {
      code: 'cheddar_packages',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Cheddar Packages',
      shouldDisplay: false,
    },
    payment_gateway: {
      code: 'payment_gateway',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Payment Gateways',
      shouldDisplay: false,
    },
    package_discount: {
      code: 'package_discount',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Package Discounts',
      shouldDisplay: false,
    },
    package_features: {
      code: 'package_features',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Package Features',
      shouldDisplay: false,
    },
    payment_gateway_config: {
      code: 'payment_gateway_config',
      portal_code: 'site_config',
      configuration_code: 'packages',
      text: 'Payment Gateway Config',
      shouldDisplay: false,
    },
    queryhub: {
      code: 'queryhub',
      portal_code: 'site_config',
      configuration_code: 'misc',
      text: 'Query Hub',
      shouldDisplay: false,
    },
    redis: {
      code: 'redis',
      portal_code: 'site_config',
      configuration_code: 'misc',
      text: 'Redis',
      shouldDisplay: false,
    },
    redis_cache_clear: {
      code: 'redis_cache_clear',
      portal_code: 'site_config',
      configuration_code: 'misc',
      text: 'Redis Cache Clear',
      shouldDisplay: false,
    },
    job_details: {
      code: 'job_details',
      portal_code: 'site_config',
      configuration_code: 'misc',
      text: 'Job Details',
      shouldDisplay: false,
    },
    turito_table: {
      code: 'turito_table',
      portal_code: 'site_config',
      configuration_code: 'misc',
      text: 'Turito Table',
      shouldDisplay: false,
    },
    image_upload: {
      code: 'image_upload',
      portal_code: 'site_config',
      configuration_code: 'misc_operations',
      text: 'Image Upload',
      shouldDisplay: false,
    },
    catchup_stream_providers: {
      code: 'catchup_stream_providers',
      portal_code: 'site_config',
      configuration_code: 'misc_operations',
      text: 'Catchup Stream Providers',
      shouldDisplay: false,
    },
    popup_promotion: {
      code: 'popup_promotion',
      portal_code: 'site_config',
      configuration_code: 'misc_operations',
      text: 'Popup Promotion',
      shouldDisplay: false,
    },
    Player_Path_Launch: {
      code: 'Player_Path_Launch',
      portal_code: 'site_config',
      configuration_code: 'misc_operations',
      text: 'Player Path Launch',
      shouldDisplay: false,
    },
    tv_guide_banners: {
      code: 'tv_guide_banners',
      portal_code: 'site_config',
      configuration_code: 'misc_operations',
      text: 'TV Guide Banners',
      shouldDisplay: false,
      relativeUrl: '/misc-operations',
      url: '/misc-operations/tv_guide_banners',
    },
    misc_tables: {
      code: 'misc_tables',
      portal_code: 'site_config',
      configuration_code: 'misc_tables',
      text: 'Misc Tables',
      shouldDisplay: false,
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
      shouldDisplay: false,
      feature_codes: [
        'banners',
        'tv_genres',
        'categories',
        'geo_rule',
        'languages',
        'localization',
      ],
    },
    'content_management': {
      code: 'content_management',
      portal_code: 'content',
      text: 'Content Management',
      shouldDisplay: false,
      feature_codes: [
        'content_partner',
        'content_channels',
        'tv_channels',
        'webseries',
        'videos',
        'movie',
        'tv_channel_changes',
        'content_channels',
        'bulk_upload_epg',
        'bulk_upload_content',
        'content_upload',
        'artist',
        'artist_role',
      ],
    },
    'social_connect': {
      code: 'social_connect',
      portal_code: 'content',
      text: 'Social Connect',
      shouldDisplay: false,
      feature_codes: [
        'socialConnect_platform',
        'socialConnect_profiles',
        'socialConnect_publish',
      ],
    },
    'custom_data': {
      code: 'custom_data',
      portal_code: 'content',
      text: 'Custom Data',
      shouldDisplay: false,
      feature_codes: ['week_list', 'seasonal_checklist'],
    },
    'partner_integrations': {
      code: 'partner_integrations',
      portal_code: 'content',
      text: 'Partner Integrations',
      shouldDisplay: false,
      feature_codes: [
        'partner_hoichoi',
        'partner_sonyliv',
        'partner_lionsgate',
        'partner_ohogujarati',
        'partner_epicon',
        'partner_hungama',
        'partner_klikk',
        'partner_hotstar',
        'partner_zee',
        'partner_manorama',
        'partner_shortstv',
        'partner_fancode',
        'partner_rajtv',
        'partner_stage',
        'partner_tarang',
        'partner_aaonxt',
        'partner_etv',
        'partner_sanskar',
        'partner_gamezop',
        'partner_shemarome',
        'partner_sunnxt',
      ],
    },
    'admin_users_logs': {
      code: 'admin_users_logs',
      portal_code: 'content',
      text: 'Admin Users / Logs',
      shouldDisplay: false,
      feature_codes: [
        'admin_users',
        'audit_log',
        'movie_log',
        'bulk_upload_history',
      ],
    },
    'subscribers_management': {
      code: 'subscribers_management',
      portal_code: 'subscriber',
      text: 'Subscribers Management',
      shouldDisplay: false,
      feature_codes: [
        'subscribers',
        'webuser_creation',
        'content_feedback',
        'package_activation',
        'paytm_manage',
        'bulk_email',
        'migrate_user',
      ],
    },
    'reporters_management': {
      code: 'reporters_management',
      portal_code: 'subscriber',
      text: 'Reporters Management',
      shouldDisplay: false,
      feature_codes: ['reporters_manage'],
    },
    'chat_management': {
      code: 'chat_management',
      portal_code: 'subscriber',
      text: 'Chat Management',
      shouldDisplay: false,
      feature_codes: ['chat_monitoring', 'chat_history', 'blocked_users'],
    },
    'qr_code_generation': {
      code: 'qr_code_generation',
      portal_code: 'subscriber',
      text: 'QR Code Generation',
      shouldDisplay: false,
      feature_codes: ['qrcode'],
    },
    'meta_data': {
      code: 'meta_data',
      portal_code: 'site_config',
      text: 'Meta Data',
      shouldDisplay: false,
      feature_codes: [
        'sections',
        'filter_definations',
        'coupon_info',
        'offers',
        'menus',
        'pages',
        'page_attribute',
        'target_page',
        'content',
        'dynamic_content',
        'custom_object_list',
        'rss_feed_source_list',
      ],
    },
    'meta_table': {
      code: 'meta_table',
      portal_code: 'site_config',
      text: 'Meta Table',
      shouldDisplay: false,
      feature_codes: [
        'country',
        'currency',
        'data_set',
        'duration',
        'parental_controls',
        'user_emoji',
        'playlist_group',
        'predefined_playlist',
        'device_type',
      ],
    },
    'configurations': {
      code: 'configurations',
      portal_code: 'site_config',
      text: 'Configurations',
      shouldDisplay: false,
      feature_codes: [
        'configuration',
        'service_configuration',
        'card_configuration',
        'field_configuration',
        'search_element',
        'stream_provider',
        'stream_config',
        'admin_configuration',
        'system_feature',
        'resource_and_device_resource_profile',
        'network_device_properties',
        'page_event_configuration',
        'custom_attribute',
      ],
    },
    'vouchers': {
      code: 'vouchers',
      portal_code: 'site_config',
      text: 'Vochers',
      shouldDisplay: false,
      feature_codes: [
        'vocher_types',
        'vouchers',
        'fetch_vouchers',
        'orange_carrier',
      ],
    },
    'ad_configuration': {
      code: 'ad_configuration',
      portal_code: 'site_config',
      text: 'Ad Configuration',
      shouldDisplay: false,
      feature_codes: ['page_ad_provider'],
    },
    'seo': {
      code: 'seo',
      portal_code: 'site_config',
      text: 'Seo',
      shouldDisplay: false,
      feature_codes: ['seo'],
    },
    'roles_and_features': {
      code: 'roles_and_features',
      portal_code: 'site_config',
      text: 'Roles And Features',
      shouldDisplay: false,
      feature_codes: ['roles', 'features'],
    },
    'packages': {
      code: 'packages',
      portal_code: 'site_config',
      text: 'Packages',
      shouldDisplay: false,
      feature_codes: [
        'master_packages',
        'packages',
        'cheddar_packages',
        'payment_gateway',
        'package_discount',
        'package_features',
        'payment_gateway_config',
      ],
    },
    'misc': {
      code: 'misc',
      portal_code: 'site_config',
      text: 'Misc',
      shouldDisplay: false,
      feature_codes: [
        'queryhub',
        'redis',
        'redis_cache_clear',
        'job_details',
        'turito_table',
      ],
    },
    'misc_operations': {
      code: 'misc_operations',
      portal_code: 'site_config',
      text: 'Misc Operations',
      shouldDisplay: false,
      feature_codes: [
        'image_upload',
        'catchup_stream_providers',
        'popup_promotion',
        'Player_Path_Launch',
        'tv_guide_banners',
      ],
    },
    'misc_tables': {
      code: 'misc_tables',
      portal_code: 'site_config',
      text: 'Misc Tables',
      shouldDisplay: false,
      feature_codes: ['misc_tables'],
    },
  };

  /*eslint-enable camelcase */
  return configurations;
};

export const getTenantCode = () => appConfigsInstance.Config.tenant;
export const getSessionId = () => {
  const userDetails = JSON.parse(readFromLocalStorage('userDetails') || '{}');
  return userDetails.sessionId;
};

export const getProfile = (resource?: string) => {
  const resourceProfilesStr = readFromLocalStorage('resourceProfiles');
  let resourceProfiles = [];
  if (!!resourceProfilesStr) {
    resourceProfiles = JSON.parse(resourceProfilesStr)?.data;
  }
  if (!!resource) {
    for (const re of resourceProfiles) {
      if (resource == re.code) {
        return re.urlPrefix;
      }
    }
  } else {
    for (const re of resourceProfiles) {
      if (re.isDefault) {
        return re.urlPrefix;
      }
    }
  }
};

export const getImage = (image: string): string => {
  const constants = getadminSyncConstants();
  if (image == undefined) {
    return constants.noImagePath;
  } else if (image.indexOf('http') == 0 || image.indexOf('https') == 0) {
    return image;
  } else if (image.split(',').length == 2) {
    const arr = image.split(',');
    const profile = getProfile(arr[0]);
    return profile + arr[1];
  } else {
    return getProfile() + image;
  }
};
