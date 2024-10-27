import { GridOptions } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React, { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface AdminGenricTablePropsInterface<T> {
  height?: string | number;
  width?: string | number;
  gridOptions: GridOptions;
}

const AdminGenricTable = <T,>(props: AdminGenricTablePropsInterface<T>) => {
  const { gridOptions, height, width } = props;
  const containerStyle = useMemo(
    () => ({ height: height || '500px', width: width || '100%' }),
    [height, width],
  );
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  return (
    <div style={containerStyle}>
      <div style={gridStyle} className={'ag-theme-quartz'}>
        <AgGridReact<T> {...gridOptions} />
      </div>
    </div>
  );
};

export default AdminGenricTable;
