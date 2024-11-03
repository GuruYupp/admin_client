import { VodCategoriesInterface } from '@/adminTypes/VodCategoriesTypes';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectVodCategories } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { FC, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { fetchVodCategories } from '@/libs/redux/features/paltformConfigs/VodCategoriesSlice';
import VodCategoriesActions from './cells/VodCategoriesActions';

const VodCategoriesListContainer = styled('div')(() => ({
  padding: '10px',
}));

const VodCategories: FC = () => {
  const dispatch = useAppDispatch();
  const vodCategories = useAppSelector(selectVodCategories);
  // const rowHeight: number = 100;

  const [rowData, setRowData] =
    useState<VodCategoriesInterface[]>(vodCategories);

  useEffect(() => {
    setRowData(vodCategories);
  }, [vodCategories]);

  console.log(rowData);

  const columnDefs: ColDef<VodCategoriesInterface & { actions: string }>[] = [
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
    { field: 'actions', cellRenderer: VodCategoriesActions },
  ];

  useEffect(() => {
    dispatch(fetchVodCategories());
  }, [dispatch]);
  return (
    <VodCategoriesListContainer>
      <AdminGenricTable<VodCategoriesInterface>
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
    </VodCategoriesListContainer>
  );
};

export default VodCategories;
