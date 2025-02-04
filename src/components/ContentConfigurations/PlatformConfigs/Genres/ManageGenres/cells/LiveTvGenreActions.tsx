import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { useAppSelector } from '@/libs/redux/hooks';
import { selecthasPermission } from '@/libs/redux/selectors';
import { ICellRendererParams } from 'ag-grid-community';
import EditIcon from '@/components/shared/GenricActionIcons/EditIcon/EditIcon';
import ActivateIcon from '@/components/shared/GenricActionIcons/ActivateIcon/ActivateIcon';
import DeActivateIcon from '@/components/shared/GenricActionIcons/DeActivateIcon/DeActivateIcon';
import { LiveTvGenresInterface } from '@/adminTypes/LiveTvGenresTypes';

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

const LiveTvGenreActions: FC<ICellRendererParams<LiveTvGenresInterface>> = (
  props,
) => {
  const { data } = props;
  const isActive: boolean | undefined = data?.isActive;
  const updateGenre = useAppSelector((state) =>
    selecthasPermission(state, 'update_genre'),
  );

  return (
    <StyledContainer>
      {updateGenre && <EditIcon color="#01a8fe" title="Edit Genre" />}
      {isActive && updateGenre && (
        <ActivateIcon color="#46be8a" title="Deactivate Genre" />
      )}
      {!isActive && updateGenre && (
        <DeActivateIcon color="#fb434a" title="Activate Genre" />
      )}
    </StyledContainer>
  );
};

export default LiveTvGenreActions;
