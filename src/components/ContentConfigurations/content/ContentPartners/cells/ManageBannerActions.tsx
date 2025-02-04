import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { useAppSelector } from '@/libs/redux/hooks';
import { selecthasPermission } from '@/libs/redux/selectors';
import { ICellRendererParams } from 'ag-grid-community';
import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import EditIcon from '@/components/shared/GenricActionIcons/EditIcon/EditIcon';
import DeleteIcon from '@/components/shared/GenricActionIcons/DeleteIcon/DeleteIcon';
import ActivateIcon from '@/components/shared/GenricActionIcons/ActivateIcon/ActivateIcon';
import DeActivateIcon from '@/components/shared/GenricActionIcons/DeActivateIcon/DeActivateIcon';

const StyledContainer = styled(Container)(() => ({
  '&.MuiContainer-root': {
    padding: '0px',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
  },
})) as typeof Container;

const ManageBannerActions: FC<ICellRendererParams<BannerInterface>> = (
  props,
) => {
  const { data } = props;
  const isActive: boolean | undefined = data?.isActive;
  const updateBanner = useAppSelector((state) =>
    selecthasPermission(state, 'update_banner'),
  );
  const deleteBanner = useAppSelector((state) =>
    selecthasPermission(state, 'delete_banner'),
  );
  return (
    <StyledContainer>
      {updateBanner && <EditIcon color="#01a8fe" title="Edit Banner" />}
      {isActive && updateBanner && (
        <ActivateIcon color="#46be8a" title="Deactivate Banner" />
      )}
      {!isActive && updateBanner && (
        <DeActivateIcon color="#fb434a" title="Activate Banner" />
      )}
      {deleteBanner && <DeleteIcon color="#acb7bf" title="Delete Banner" />}
    </StyledContainer>
  );
};

export default ManageBannerActions;
