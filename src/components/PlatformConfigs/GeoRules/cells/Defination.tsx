import { GeoRuleInterface } from '@/adminTypes/GeoRuleTypes';
// import AdminGenericTextCell from '@/components/shared/AdminGenricTable/AdminGenericTextCell';
import { ICellRendererParams } from 'ag-grid-community';
const DefinationWrapped = (props: ICellRendererParams<GeoRuleInterface>) => {
  const { data } = props;
  return <span>{data?.definition}</span>;
};

const Defination = DefinationWrapped;
//   AdminGenericTextCell<ICellRendererParams<GeoRuleInterface>>(DefinationWrapped);

export default Defination;
