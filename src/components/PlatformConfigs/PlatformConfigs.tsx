import React from 'react';
import { usePathname } from 'next/navigation';
import ManageBanners from './Banners/ManageBanners/ManageBanners';
import { ManageGenres } from './Genres/ManageGenres/ManageGenres';

const PlatformConfigs = () => {
  const pathname = usePathname();
  const renderConfigs = () => {
    switch (pathname) {
      case '/platform-config/banners':
        return <ManageBanners />;
      case '/platform-config/live-tv-genres':
        return <ManageGenres />;
    }
  };
  return renderConfigs();
};

export default PlatformConfigs;
