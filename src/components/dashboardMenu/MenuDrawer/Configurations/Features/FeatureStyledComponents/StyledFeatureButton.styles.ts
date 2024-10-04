import { styled } from '@mui/material';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import { FC } from 'react';

interface FeatureButtonProps extends ListItemButtonProps {
  'custom-isSubMenuItem'?: boolean;
}

const shouldForwardProp = (
  prop: FeatureButtonProps[keyof FeatureButtonProps],
) => !prop.startsWith('custom');

const StyledFeatureButton = styled(ListItemButton, {
  shouldForwardProp,
})<FeatureButtonProps>(({ theme, 'custom-isSubMenuItem': isSubMenuItem }) => ({
  '&:hover': {
    ...(!isSubMenuItem && {
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
    }),
  },
})) as FC<FeatureButtonProps>;

export default StyledFeatureButton;
