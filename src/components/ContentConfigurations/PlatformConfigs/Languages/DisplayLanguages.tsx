import {
  DisplayLanguagesInterface,
  platformLanguagesInterface,
} from '@/adminTypes/Languages';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { fetchDisplayLanguages } from '@/libs/redux/features/paltformConfigs/LanguagesSlice';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectDisplayLanguages } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, useState } from 'react';

const DisplayLanguages = () => {
  const displaylanguages = useAppSelector(selectDisplayLanguages);
  const [rowData, setRowData] =
    useState<DisplayLanguagesInterface[]>(displaylanguages);
  useEffect(() => {
    setRowData(displaylanguages);
  }, [displaylanguages]);
  const columnDefs: ColDef<DisplayLanguagesInterface>[] = [
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
    dispatch(fetchDisplayLanguages());
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

export default DisplayLanguages;
