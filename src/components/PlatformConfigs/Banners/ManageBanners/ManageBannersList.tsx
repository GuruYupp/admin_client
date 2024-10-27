// Theme
import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { useAppSelector } from '@/libs/redux/hooks';
import { selectManageBanners } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, useState } from 'react';
import ContentPartner from './cells/ContentPartner';
import BannerImage from './cells/BannerImage';
// Create new GridExample component
const ManageBannersList = () => {
  const Banners = useAppSelector(selectManageBanners);

  const columnDefs2: ColDef[] = [
    {
      field: 'id',
      width: 100,
      cellStyle: { textAlign: 'left', lineHeight: '100px' },
    },
    {
      field: 'networkId',
      headerName: 'Content Partner',
      cellRenderer: ContentPartner,
    },
    {
      field: 'name',
      headerName: 'Title',
      cellStyle: { textAlign: 'left', lineHeight: '100px' },
    },
    { field: 'image', cellRenderer: BannerImage },
    {
      field: 'sourcePath',
      headerName: 'Display Page',
      cellStyle: { textAlign: 'left', lineHeight: '100px' },
    },
    {
      field: 'targetPath',
      headerName: 'Target Url',
      cellStyle: { textAlign: 'left', lineHeight: '100px' },
    },
    {
      field: 'language',
      headerName: 'Languages',
      cellStyle: { textAlign: 'left', lineHeight: '100px' },
    },
    { field: 'actions', cellStyle: { textAlign: 'left', lineHeight: '100px' } },
  ];

  const [rowData2, setRowData2] = useState<BannerInterface[]>(Banners);

  useEffect(() => {
    setRowData2(Banners);
  }, [Banners]);

  return (
    <AdminGenricTable<BannerInterface>
      gridOptions={{
        rowData: rowData2,
        columnDefs: columnDefs2,
        rowHeight: 100,
      }}
    />
  );
};
export default ManageBannersList;
