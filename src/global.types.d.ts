export type validClientType = 'herogotv' | 'timesplay' | 'yvs';

export interface AppConfigsObserver {
  update: {
    (configs: { [key: string]: any }): void;
  };
}
export interface AppConfigsSubject {
  register: {
    (observer: AppConfigsObserver): void;
  };
  unregister: {
    (observer: AppConfigsObserver): void;
  };
  notifyObservers: {
    (): void;
  };
}

export interface responseInterface {
  status: boolean;
  error?: {
    code: number;
    message: string;
    type: string;
    details: { [key: string]: string };
  };
  response?: {
    data: unknown;
    profiles?: unknown;
  };
}

export interface loginresponseInterface
  extends Omit<responseInterface, 'response'> {
  response: unknown;
}

export interface adminLoginUserRole {
  name: string;
  code: string;
}

export interface adminLoginUserPortal {
  name: string;
  code: string;
}

export interface adminLoginUserFeature {
  name: string;
  code: string;
}

export interface adminLoginUserDetailsInterface {
  emailId: string;
  portals: adminLoginUserPortal[]; // Specify a more detailed type if known
  features: adminLoginUserFeature[]; // Specify a more detailed type if known
  permissions: any[]; // Specify a more detailed type if known
  roles: adminLoginUserRole[];
  status: boolean;
  sessionId: string;
  userId: number;
  userName: string;
}

const portalEnums = {
  Content: 'content',
  Subscriber: 'subscriber',
  SiteConfig: 'site_config',
  Reports: 'reports',
  Analytics: 'analytics',
} as const;
type portalType = (typeof portalEnums)[keyof typeof portalEnums];
type portalsType = {
  [key in portalType]: {
    code: portalType;
    text: string;
    shouldDisplay: boolean;
  };
};

const featuresEnum = {
  /* content portal configurations starts */

  //platform operations
  Banners: 'banners',
  TvGenres: 'tv_genres',
  Categories: 'categories',
  GeoRule: 'geo_rule',
  Languages: 'languages',
  Localization: 'localization',

  //content management
  ContentPartner: 'content_partner',
  ContentChannels: 'content_channels',
  TvChannels: 'tv_channels',
  Webseries: 'webseries',
  Videos: 'videos',
  Movie: 'movie',
  PendingChannels: 'pending_channels',
  TVChannelChanges: 'tv_channel_changes',
  BulkUploadContent: 'bulk_upload_content',
  BulkUploadEPG: 'bulk_upload_epg',
  EncodedStreams: 'content_upload',
  ArtistRole: 'artist_role',
  Artist: 'artist',

  //social connect
  SocialConnectPlatform: 'socialConnect_platform',
  SocialConnectProfiles: 'socialConnect_profiles',
  SocialConnectPublish: 'socialConnect_publish',

  //custom data
  WeekList: 'week_list',
  SeasonalChecklist: 'seasonal_checklist',

  //content partners
  PartnerHoichoi: 'partner_hoichoi',
  PartnerSonyliv: 'partner_sonyliv',
  PartnerLionsgate: 'partner_lionsgate',
  PartnerOhogujarati: 'partner_ohogujarati',
  PartnerEpicon: 'partner_epicon',
  PartnerHungama: 'partner_hungama',
  PartnerKlikk: 'partner_klikk',
  PartnerHotstar: 'partner_hotstar',
  PartnerZee: 'partner_zee',
  PartnerManorama: 'partner_manorama',
  PartnerShortstv: 'partner_shortstv',
  PartnerFancode: 'partner_fancode',
  PartnerRajtv: 'partner_rajtv',
  PartnerStage: 'partner_stage',
  PartnerTarang: 'partner_tarang',
  PartnerAaonxt: 'partner_aaonxt',
  PartnerEtv: 'partner_etv',
  PartnerGamezop: 'partner_gamezop',
  PartnerSanskar: 'partner_sanskar',
  PartnerShemarome: 'partner_shemarome',
  PartnerSunnxt: 'partner_sunnxt',

  //admin users logs
  AdminUsers: 'admin_users',
  AuditLog: 'audit_log',
  MovieLog: 'movie_log',
  BulkUploadHistory: 'bulk_upload_history',

  /* content portal configurations ends */

  /* Platform configurations portal starts */

  // meta data
  Sections: 'sections',
  FilterDefinitions: 'filter_definations', // Note: Corrected spelling from "Definations" to "Definitions"
  CouponInfo: 'coupon_info',
  Offers: 'offers',
  Menus: 'menus',
  Pages: 'pages',
  PageAttribute: 'page_attribute',
  TargetPages: 'target_page',
  Content: 'content',
  DynamicContent: 'dynamic_content',
  CustomObjectList: 'custom_object_list',
  RssFeedSourceList: 'rss_feed_source_list',

  // meta table
  Country: 'country',
  Currency: 'currency',
  DataSet: 'data_set',
  Duration: 'duration',
  ParentalControls: 'parental_controls',
  UserEmoji: 'user_emoji',
  PlaylistGroup: 'playlist_group',
  PredefinedPlaylist: 'predefined_playlist',
  DeviceType: 'device_type',

  //configurations
  Configuration: 'configuration',
  ServiceConfiguration: 'service_configuration',
  CardConfiguration: 'card_configuration',
  FieldConfiguration: 'field_configuration',
  SearchElement: 'search_element',
  StreamProvider: 'stream_provider',
  StreamConfig: 'stream_config',
  AdminConfiguration: 'admin_configuration',
  SystemFeature: 'system_feature',
  ResourceAndDeviceResourceProfile: 'resource_and_device_resource_profile',
  NetworkDeviceProperties: 'network_device_properties',
  PageEventConfiguration: 'page_event_configuration',
  CustomAttribute: 'custom_attribute',

  //Vouchers
  Vouchers: 'vouchers',
  OrangeCarrier: 'orange_carrier',
  VocherTypes: 'vocher_types', // Note: Check for possible typo: should it be 'voucher_types'?
  GenerateVouchers: 'generate_vouchers',
  FetchVouchers: 'fetch_vouchers',

  //ad configurations
  PageAdProvider: 'page_ad_provider',

  //seo
  Seo: 'seo',

  //roles & features
  Roles: 'roles',
  Features: 'features',
  Permissions: 'permissions',

  //packages
  MasterPackages: 'master_packages',
  Packages: 'packages',
  CheddarPackages: 'cheddar_packages',
  PaymentGateway: 'payment_gateway',
  PackageDiscount: 'package_discount',
  PackageFeatures: 'package_features',
  PaymentGatewayConfig: 'payment_gateway_config',

  //Misc
  QueryHub: 'queryhub',
  Redis: 'redis',
  RedisCacheClear: 'redis_cache_clear',
  JobDetails: 'job_details',
  TuritoTable: 'turito_table',

  //Misc Operations
  ImageUpload: 'image_upload',
  CatchupStreamProviders: 'catchup_stream_providers',
  PopupPromotion: 'popup_promotion',
  PlayerPathLaunch: 'Player_Path_Launch',
  TvGuideBanners: 'tv_guide_banners',

  MiscTables: 'misc_tables',

  /* Platform configurations portal ends */

  /* Support Operations portal starts */
  Subscribers: 'subscribers',
  WebuserCreation: 'webuser_creation',
  ContentFeedback: 'content_feedback',
  PackageActivation: 'package_activation',
  PaytmManage: 'paytm_manage',
  BulkEmail: 'bulk_email',
  MigrateUser: 'migrate_user',
  ReportersManage: 'reporters_manage',
  chatMonitoring: 'chat_monitoring',
  ChatHistory: 'chat_history',
  BlockedUsers: 'blocked_users',
  ChatUsers: 'chat_users',
  Qrcode: 'qrcode',
  /* Support Operations portal ends */
} as const;

type featureType = (typeof featuresEnum)[keyof typeof featuresEnum];

type featuresType = {
  [key in featureType]: {
    code: featureType;
    text: string;
    configuration_code: configurationType;
    portal_code: portalType;
    shouldDisplay: boolean;
  };
};

const configurationEnum = {
  PlatformOperations: 'platform_operations',
  ContentManagement: 'content_management',
  SocialConnect: 'social_connect',
  CustomData: 'custom_data',
  PartnerIntegrations: 'partner_integrations',
  AdminUsersAndLogs: 'admin_users_logs',

  MetaData: 'meta_data',
  MetaTable: 'meta_table',
  Configurations: 'configurations',
  Vouchers: 'vouchers',
  AdConfiguration: 'ad_configuration',
  Seo: 'seo',
  RolesAndFeatures: 'roles_and_features',
  Packages: 'packages',
  Misc: 'misc',
  MiscOperations: 'misc_operations',
  MiscTables: 'misc_tables',

  SubscribersManagement: 'subscribers_management',
  ReportersManagement: 'reporters_management',
  ChatManagement: 'chat_management',
  QRCodeGeneration: 'qr_code_generation',
} as const;

type configurationType =
  (typeof configurationEnum)[keyof typeof configurationEnum];

type configurationsType = {
  [key in configurationType]: {
    code: configurationType;
    text: string;
    portal_code: portalType;
    feature_codes: featureType[];
    shouldDisplay: boolean;
  };
};

interface WhoColumnsInterface {
  createdBy: string;
  createdDate: number; // Assuming this is a timestamp
  lastUpdatedBy: string;
  lastUpdatedDate: number; // Assuming this is a timestamp
}

interface ResourceProfileInterface {
  // profiles: {
  name: string;
  code: string;
  urlPrefix: string;
  targetParams: {
    deviceName: string;
    target: string;
  }[];
  // };
}
