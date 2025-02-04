import {
  fetchLocalizationDisplayLangs,
  localizationItemInterface,
} from '@/libs/redux/features/paltformConfigs/LocalizationSlice';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hooks';
import {
  selectLocalizationDisplayLanguages,
  selectLocalizationDisplayLanguagesList,
} from '@/libs/redux/selectors';
import { ColDef } from 'ag-grid-community';
import React, { useEffect, ComponentType, useState } from 'react';
import { LocalizationListPropsInterface } from './LocalizationList';
import LocalizationActions from './cells/LocalizationActions';

const LocalizationListHoc = (
  Component: ComponentType<LocalizationListPropsInterface>,
) => {
  const LocalizationListFactory = () => {
    const displayLangs = useAppSelector(selectLocalizationDisplayLanguages);
    const languageList = useAppSelector(selectLocalizationDisplayLanguagesList);
    const [columnDefs, setcolumnDefs] = useState<ColDef[]>([]);
    const [rowData, setRowData] = useState<localizationItemInterface[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchLocalizationDisplayLangs());
    }, [dispatch]);

    useEffect(() => {
      const colfields: ColDef[] = languageList.headers
        .filter((header) =>
          displayLangs.some(
            (displaylang) =>
              (displaylang.code === header && displaylang.isActive) ||
              header === 'code',
          ),
        )
        .map((colfield) => ({
          field: colfield,
          cellStyle: { textAlign: 'left' },
          ...{
            wrapText: true,
            autoHeight: true,
          },
        }));

      setcolumnDefs([
        ...colfields,
        {
          field: 'More Actions',
          cellRenderer: LocalizationActions,
          cellStyle: { width: 'auto' },
        },
      ]);
      setRowData(languageList.items.map((item) => item.data));
    }, [displayLangs, languageList.headers, languageList.items]);

    return (
      rowData.length > 0 && (
        <Component rowData={rowData} columnDefs={columnDefs} />
      )
    );
  };
  return LocalizationListFactory;
};

export default LocalizationListHoc;
