import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import AdminGenericTextCell from '@/components/shared/AdminGenricTable/AdminGenericTextCell';
import { ICellRendererParams } from 'ag-grid-community';
const TargetUrlWrapped = (props: ICellRendererParams<BannerInterface>) => {
  const { data } = props;
  return <span>{data?.targetPath}</span>;
};

const TargetUrl =
  AdminGenericTextCell<ICellRendererParams<BannerInterface>>(TargetUrlWrapped);

export default TargetUrl;
