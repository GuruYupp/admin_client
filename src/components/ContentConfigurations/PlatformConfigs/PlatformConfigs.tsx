import React from 'react';
import { usePathname } from 'next/navigation';
import ManageBanners from './Banners/ManageBanners/ManageBanners';
import { ManageGenres } from './Genres/ManageGenres/ManageGenres';
import VodCategories from './VodCategories/VodCategories';
import GeoRules from './GeoRules/GeoRules';
import Languages from './Languages/Languages';
import Localization from './Localization/Localization';

const PlatformConfigs = () => {
  const pathname = usePathname();
  const renderConfigs = () => {
    switch (pathname) {
      case '/platform-config/banners':
        return <ManageBanners />;
      case '/platform-config/live-tv-genres':
        return <ManageGenres />;
      case '/platform-config/categories':
        return <VodCategories />;
      case '/platform-config/georule':
        return <GeoRules />;
      case '/platform-config/languages':
        return <Languages />;
      case '/platform-config/localization':
        return <Localization />;
      default:
        return <>Coming Soon</>;
    }
  };
  return renderConfigs();
};

export default PlatformConfigs;
