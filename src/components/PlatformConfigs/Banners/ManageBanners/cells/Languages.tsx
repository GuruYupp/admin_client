import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import AdminGenericTextCell from '@/components/shared/AdminGenricTable/AdminGenericTextCell';
import { ICellRendererParams } from 'ag-grid-community';
const LanguagesWrapped = (props: ICellRendererParams<BannerInterface>) => {
  const { data } = props;
  return <span>{data?.language}</span>;
};

const Languages =
  AdminGenericTextCell<ICellRendererParams<BannerInterface>>(LanguagesWrapped);

export default Languages;
