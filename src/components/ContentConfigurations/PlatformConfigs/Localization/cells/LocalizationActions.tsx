import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { ICellRendererParams } from 'ag-grid-community';
import EditIcon from '@/components/shared/GenricActionIcons/EditIcon/EditIcon';
import { localizationItemInterface } from '@/libs/redux/features/paltformConfigs/LocalizationSlice';

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

const LocalizationActions: FC<
  ICellRendererParams<localizationItemInterface>
> = () => {
  return (
    <StyledContainer>
      <EditIcon color="#01a8fe" title="Edit Localization" />
    </StyledContainer>
  );
};

export default LocalizationActions;
