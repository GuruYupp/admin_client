import { ColDef } from 'ag-grid-community';
import LocalizationListHoc from './LocalizationListHoc';
import { localizationItemInterface } from '@/libs/redux/features/paltformConfigs/LocalizationSlice';
import { FC } from 'react';
import AdminGenricTable from '@/components/shared/AdminGenricTable/AdminGenricTable';

export interface LocalizationListPropsInterface {
  columnDefs: ColDef[];
  rowData: localizationItemInterface[];
}

const LocalizationList: FC<LocalizationListPropsInterface> = ({
  columnDefs,
  rowData,
}) => {
  return (
    <AdminGenricTable<localizationItemInterface>
      gridOptions={{
        rowData,
        columnDefs,
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

export default LocalizationListHoc(LocalizationList);
