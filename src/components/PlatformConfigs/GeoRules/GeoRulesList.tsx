import { GeoRuleInterface } from '@/adminTypes/GeoRuleTypes';
import { fetchGeoRules } from '@/libs/redux/features/paltformConfigs/GeoRulesSlice';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import { selectGeoRules } from '@/libs/redux/selectors';
import { styled } from '@mui/material';
import { ColDef } from 'ag-grid-community';
import { useEffect, useState } from 'react';
import GeoRuleActions from './cells/GeoRuleActions';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';
import Defination from './cells/Defination';

const GeoRulesListContainer = styled('div')(() => ({}));

const GeoRulesList = () => {
  const dispatch = useAppDispatch();
  const georules = useAppSelector(selectGeoRules);
  const [rowData, setRowData] = useState<GeoRuleInterface[]>(georules);

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
      field: 'definition',
      cellStyle: { textAlign: 'left' },
      flex: 1,
      wrapText: true,
      autoHeight: true,
      cellRenderer: Defination,
    },
    { field: 'actions', cellRenderer: GeoRuleActions },
  ];

  useEffect(() => {
    dispatch(fetchGeoRules());
  }, [dispatch]);

  useEffect(() => {
    setRowData(georules);
  }, [georules]);
  return (
    <GeoRulesListContainer>
      <AdminGenricTable<GeoRuleInterface>
        gridOptions={{
          rowData: rowData,
          //   rowHeight:20,
          columnDefs: columnDefs,
          pagination: true,
          paginationPageSize: 20,
          paginationPageSizeSelector: [10, 20, 50, 100, 200],
          autoSizeStrategy: {
            type: 'fitGridWidth',
          },
        }}
      />
    </GeoRulesListContainer>
  );
};

export default GeoRulesList;
