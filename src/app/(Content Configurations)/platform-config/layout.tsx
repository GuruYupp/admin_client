'use client';
import AdminBreadCrumbs from '@/components/shared/AdminBreadCrumbs/AdminBreadCrumbs';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

const PlatformConfigHeaderValues: {
  [key: string]: {
    labelText: string;
    buttonText: string;
    showAddIcon: boolean;
    breadcrumbs?: { link?: undefined; text: string }[];
  };
} = {
  '/platform-config/banners': {
    labelText: 'Manage Banners',
    buttonText: 'Add new Banner',
    showAddIcon: true,
    breadcrumbs: [{ text: 'Platform Operations' }, { text: 'Manage Banners' }],
  },
  '/platform-config/live-tv-genres': {
    labelText: 'Live TV Genere',
    buttonText: 'Add new Genre',
    showAddIcon: true,
    breadcrumbs: [{ text: 'Platform Operations' }, { text: 'Live TV Genres' }],
  },
  '/platform-config/categories': {
    labelText: 'VOD Categories',
    buttonText: 'Add new VOD Category',
    showAddIcon: true,
    breadcrumbs: [{ text: 'Platform Operations' }, { text: 'VOD Categories' }],
  },
  '/platform-config/georule': {
    labelText: 'Geo & Device Filters',
    buttonText: 'Add new Filter',
    showAddIcon: true,
    breadcrumbs: [
      { text: 'Platform Operations' },
      { text: 'Geo & Device Filters' },
    ],
  },
  '/platform-config/localization': {
    labelText: 'Localization Resource',
    buttonText: 'Add new Localization Resource',
    showAddIcon: true,
    breadcrumbs: [
      { text: 'Platform Operations' },
      { text: 'Localization Resource' },
    ],
  },
  '/platform-config/languages': {
    labelText: 'Languages',
    buttonText: 'Add new Localization Language',
    showAddIcon: true,
  },
};

const PlatformConfigBox = styled(Box)(() => ({
  backgroundColor: '#fff',
}));

const PlatformConfigHeader = styled('div')(() => ({
  padding: '.75rem 1.25rem',
  marginBottom: 0,
  backgroundColor: '#fff',
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const PlatformConfigHeaderLabel = styled('span')(() => ({
  fontSize: '1.1rem',
  color: '#393749',
  wordBreak: 'break-all',
  fontWeight: 'normal',
}));

export default function PlatfromConfigLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const showLayoutHeader = ['/platform-config/languages'].includes(
    pathname || '',
  );

  const HeaderLabel =
    PlatformConfigHeaderValues[pathname || '']?.labelText || '';
  const AddButtonLabel =
    PlatformConfigHeaderValues[pathname || '']?.buttonText || '';
  const showPlusIcon =
    PlatformConfigHeaderValues[pathname || '']?.showAddIcon || '';
  const BreadCrumbs =
    PlatformConfigHeaderValues[pathname || '']?.breadcrumbs || [];

  return (
    <>
      {BreadCrumbs.length > 0 && <AdminBreadCrumbs data={BreadCrumbs} />}
      <PlatformConfigBox>
        {!showLayoutHeader && (
          <PlatformConfigHeader>
            <PlatformConfigHeaderLabel>{HeaderLabel}</PlatformConfigHeaderLabel>
            <Button
              variant="contained"
              startIcon={showPlusIcon && <FaPlus />}
              size="small">
              {AddButtonLabel}
            </Button>
          </PlatformConfigHeader>
        )}
        {children}
      </PlatformConfigBox>
    </>
  );
}
