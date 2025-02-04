import { platformLanguagesInterface } from '@/adminTypes/Languages';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { fetchPlatformLanguages } from '@/libs/redux/features/paltformConfigs/LanguagesSlice';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectPlatfromLanguages } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, useState } from 'react';

const PlatformLanguages = () => {
  const platformlanguages = useAppSelector(selectPlatfromLanguages);
  const [rowData, setRowData] =
    useState<platformLanguagesInterface[]>(platformlanguages);
  useEffect(() => {
    setRowData(platformlanguages);
  }, [platformlanguages]);
  const columnDefs: ColDef<platformLanguagesInterface>[] = [
    {
      field: 'id',
      width: 100,
      cellStyle: { textAlign: 'left' },
    },
    {
      field: 'name',
      cellStyle: { textAlign: 'left' },
    },
    {
      field: 'code',
      cellStyle: { textAlign: 'left' },
    },
    {
      field: 'alphaCode',
      cellStyle: { textAlign: 'left' },
    },
    {
      field: 'isActive',
      cellStyle: { textAlign: 'left' },
      cellRenderer: (params: { value: boolean }) => {
        return params.value.toString();
      },
    },
    {
      field: 'priority',
      cellStyle: { textAlign: 'left' },
    },
    // { field: 'actions', cellRenderer: VodCategoriesActions },
  ];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlatformLanguages());
  }, [dispatch]);
  return (
    <AdminGenricTable<platformLanguagesInterface>
      gridOptions={{
        rowData: rowData,
        columnDefs: columnDefs,
        // rowHeight: rowHeight,
        pagination: true,
        paginationPageSize: 20,
        paginationPageSizeSelector: [10, 20, 50, 100, 200],
        autoSizeStrategy: {
          type: 'fitGridWidth',
        },
      }}
    />
  );
};

export default PlatformLanguages;
