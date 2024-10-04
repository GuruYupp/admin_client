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

export interface adminLoginUserDetailsInterface {
  emailId: string;
  portals: adminLoginUserPortal[]; // Specify a more detailed type if known
  features: adminLoginUserPortal[]; // Specify a more detailed type if known
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
    Analytics: 'analytics'
} as const;
type portalType = typeof portalEnums[keyof typeof portalEnums];
type portalsType = {
  [key in portalType]: {
    code: portalType;
    text: string;
  };
};


const featuresEnum = {
    Banners: 'banners',
    TvGenres: 'tv_genres',
    Categories: 'categories',
    GeoRule: 'geo_rule',
    Languages: 'languages',
    Localization: 'localization',
    ContentPartner:'content_partner',
    ContentChannels:'content_channels',
    TvChannels:'tv_channels',
    Webseries:'webseries',
    Videos:'videos',
    Movie:'movie',
    PendingChannels:'content_channels',
    TVChannelChanges:'tv_channel_changes',
    BulkUploadContent:'bulk_upload_content',
    BulkUploadEPG:'bulk_upload_epg',

} as const;

type featureType = typeof featuresEnum[keyof typeof featuresEnum];;

type featuresType = {
  [key in featureType]: {
    code: featureType;
    text: string;
    configuration_code: configurationType;
    portal_code: portalType;
  };
};



const configurationEnum = {
    PlatformOperations: 'platform_operations',
    ContentManagement: 'content_management',
    SocialConnect: 'social_connect',
    CustomData: 'custom_data',
    PartnerIntegrations: 'partner_integrations',
    AdminUsersAndLogs: 'admin_users_logs',
    SubscribersManagement:'subscribers_management',
    ReportersManagement:'reporters_management',
    ChatManagement:'chat_management',
    QRCodeGeneration:'qr_code_generation'
} as const;

type configurationType = typeof configurationEnum[keyof typeof configurationEnum];

type configurationsType = {
  [key in configurationType]: {
    code: configurationType;
    text: string;
    portal_code: portalType;
  };
};



