import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import { useAppSelector } from '@/libs/redux/hooks';
import { selecthasPermission } from '@/libs/redux/selectors';
import { ICellRendererParams } from 'ag-grid-community';
import EditIcon from '@/components/shared/GenricActionIcons/EditIcon/EditIcon';
import ActivateIcon from '@/components/shared/GenricActionIcons/ActivateIcon/ActivateIcon';
import DeActivateIcon from '@/components/shared/GenricActionIcons/DeActivateIcon/DeActivateIcon';
import { VodCategoriesInterface } from '@/adminTypes/VodCategoriesTypes';

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

const VodCategoriesActions: FC<ICellRendererParams<VodCategoriesInterface>> = (
  props,
) => {
  const { data } = props;
  const isActive: boolean | undefined = data?.isActive;
  const updateCategorie = useAppSelector((state) =>
    selecthasPermission(state, 'update_category_data'),
  );

  return (
    <StyledContainer>
      {updateCategorie && <EditIcon color="#01a8fe" title="Edit Genre" />}
      {isActive && updateCategorie && (
        <ActivateIcon color="#46be8a" title="Deactivate Categorie" />
      )}
      {!isActive && updateCategorie && (
        <DeActivateIcon color="#fb434a" title="Activate Categorie" />
      )}
    </StyledContainer>
  );
};

export default VodCategoriesActions;
