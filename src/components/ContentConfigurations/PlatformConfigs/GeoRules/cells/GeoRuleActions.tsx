import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { useAppSelector } from '@/libs/redux/hooks';
import { selecthasPermission } from '@/libs/redux/selectors';
import { ICellRendererParams } from 'ag-grid-community';
import EditIcon from '@/components/shared/GenricActionIcons/EditIcon/EditIcon';
import { GeoRuleInterface } from '@/adminTypes/GeoRuleTypes';

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

const GeoRuleActions: FC<ICellRendererParams<GeoRuleInterface>> = () => {
  const updateGenre = useAppSelector((state) =>
    selecthasPermission(state, 'update_geo_rule'),
  );

  return (
    <StyledContainer>
      {updateGenre && <EditIcon color="#01a8fe" title="Edit GeoRule" />}
    </StyledContainer>
  );
};

export default GeoRuleActions;
