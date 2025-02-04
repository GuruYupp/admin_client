'use client';
import AdminBreadCrumbs from '@/components/shared/AdminBreadCrumbs/AdminBreadCrumbs';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { FaPlus } from 'react-icons/fa';

const ContentHeaderValues: {
  [key: string]: {
    labelText: string;
    buttonText: string;
    showAddIcon: boolean;
    breadcrumbs?: { link?: undefined; text: string }[];
  };
} = {
  '/content/content-partners': {
    labelText: 'Content Partners',
    buttonText: 'Add new Content Partner',
    showAddIcon: true,
    breadcrumbs: [
      { text: 'Content Management ' },
      { text: 'Content Partners' },
    ],
  },
  // '/content/live-tv-genres': {
  //   labelText: 'Live TV Genere',
  //   buttonText: 'Add new Genre',
  //   showAddIcon: true,
  //   breadcrumbs:[{text:'Content Management '},{text:'Live TV Genres'}]
  // },
  // '/content/categories': {
  //   labelText: 'VOD Categories',
  //   buttonText: 'Add new VOD Category',
  //   showAddIcon: true,
  //   breadcrumbs:[{text:'Content Management '},{text:'VOD Categories'}]
  // },
  // '/content/georule': {
  //   labelText: 'Geo & Device Filters',
  //   buttonText: 'Add new Filter',
  //   showAddIcon: true,
  //   breadcrumbs:[{text:'Content Management '},{text:'Geo & Device Filters'}]
  // },
  // '/content/localization': {
  //   labelText: 'Localization Resource',
  //   buttonText: 'Add new Localization Resource',
  //   showAddIcon: true,
  //   breadcrumbs:[{text:'Content Management '},{text:'Localization Resource'}]
  // },
  // '/content/languages': {
  //   labelText: 'Languages',
  //   buttonText: 'Add new Localization Language',
  //   showAddIcon: true,
  // },
};

const ContentBox = styled(Box)(() => ({
  backgroundColor: '#fff',
}));

const ContentHeader = styled('div')(() => ({
  padding: '.75rem 1.25rem',
  marginBottom: 0,
  backgroundColor: '#fff',
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ContentHeaderLabel = styled('span')(() => ({
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
  const showLayoutHeader = ['/content/languages'].includes(pathname || '');

  const HeaderLabel = ContentHeaderValues[pathname || '']?.labelText || '';
  const AddButtonLabel = ContentHeaderValues[pathname || '']?.buttonText || '';
  const showPlusIcon = ContentHeaderValues[pathname || '']?.showAddIcon || '';
  const BreadCrumbs = ContentHeaderValues[pathname || '']?.breadcrumbs || [];

  return (
    <>
      {BreadCrumbs.length > 0 && <AdminBreadCrumbs data={BreadCrumbs} />}
      <ContentBox>
        {!showLayoutHeader && (
          <ContentHeader>
            <ContentHeaderLabel>{HeaderLabel}</ContentHeaderLabel>
            <Button
              variant="contained"
              startIcon={showPlusIcon && <FaPlus />}
              size="small">
              {AddButtonLabel}
            </Button>
          </ContentHeader>
        )}
        {children}
      </ContentBox>
    </>
  );
}
