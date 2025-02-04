import React from 'react';
import { usePathname } from 'next/navigation';
import ContentPartners from './ContentPartners/ContentPartners';

const ContentConfigs = () => {
  const pathname = usePathname();
  const renderConfigs = () => {
    switch (pathname) {
      case '/content/content-partners':
        return <ContentPartners />;
      // case '/platform-config/live-tv-genres':
      //   return <ManageGenres />;
      // case '/platform-config/categories':
      //   return <VodCategories />;
      // case '/platform-config/georule':
      //   return <GeoRules />;
      // case '/platform-config/languages':
      //     return <Languages />;
      // case '/platform-config/localization':
      //     return <Localization />;
      default:
        return <>Coming Soon</>;
    }
  };
  return renderConfigs();
};

export default ContentConfigs;
