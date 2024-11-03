import { LiveTvGenresInterface } from '@/adminTypes/LiveTvGenresTypes';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import { fetchLivetvGeners } from '@/libs/redux/features/paltformConfigs/LiveTvGenresSlice';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectLiveTvGenres } from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, useState } from 'react';
import LiveTvGenreActions from './cells/LiveTvGenreActions';
import { styled } from '@mui/material';

const GenresListContainer = styled('div')(() => ({
  padding: '10px',
}));

export const ManageGenres = () => {
  const dispatch = useAppDispatch();
  const LiveTvGenres = useAppSelector(selectLiveTvGenres);
  // const rowHeight: number = 100;

  const [rowData, setRowData] = useState<LiveTvGenresInterface[]>(LiveTvGenres);

  useEffect(() => {
    setRowData(LiveTvGenres);
  }, [LiveTvGenres]);

  const columnDefs: ColDef[] = [
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
      field: 'priority',
      cellStyle: { textAlign: 'left' },
    },
    { field: 'actions', cellRenderer: LiveTvGenreActions },
  ];

  useEffect(() => {
    dispatch(fetchLivetvGeners());
  }, [dispatch]);



  return (
    <GenresListContainer>
      <AdminGenricTable<LiveTvGenresInterface>
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
    </GenresListContainer>
  );
};
