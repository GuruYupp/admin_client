// Theme
import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { useAppSelector } from '@/libs/redux/hooks';
import { selectManageBanners } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, useState } from 'react';
import ContentPartner from './cells/ContentPartner';
import BannerImage from './cells/BannerImage';
import TargetUrl from './cells/TargetUrl';
import Languages from './cells/Languages';
import ManageBannerActions from './cells/ManageBannerActions';
// import styles from './ManageBannersList.module.scss'
// Create new GridExample component
const ManageBannersList = () => {
  const Banners = useAppSelector(selectManageBanners);
  const rowHeight: number = 100;
  // Create new GridExample component
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
      wrapText: true,
      autoHeight: true,
      cellRenderer: TargetUrl,
    },
    {
      field: 'language',
      headerName: 'Languages',
      wrapText: true,
      autoHeight: true,
      cellRenderer: Languages,
    },
    { field: 'actions', cellRenderer: ManageBannerActions },
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
        rowHeight: rowHeight,
        pagination: true,
        paginationPageSize: 50,
        paginationPageSizeSelector: [10, 20, 50, 100, 200],
      }}
    />
  );
};
export default ManageBannersList;
