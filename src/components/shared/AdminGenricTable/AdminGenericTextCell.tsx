import { ICellRendererParams } from 'ag-grid-community';
import { ComponentType } from 'react';
import { Typography, styled } from '@mui/material';
import Container, { ContainerProps } from '@mui/material/Container';
interface StyledContainerPropsInterface extends ContainerProps {
  'custom-rowHeight'?: number;
}

const shouldForwardProp = (
  prop: StyledContainerPropsInterface[keyof ContainerProps],
) => !prop.startsWith('custom');

const StyledContainer = styled(Container, {
  shouldForwardProp,
})<StyledContainerPropsInterface>(({ 'custom-rowHeight': rowHeight }) => ({
  '&.MuiContainer-root': {
    padding: '0px',
    display: 'flex',
    height: `${rowHeight}px`,
    justifyContent: 'start',
    alignItems: 'center',
  },
})) as typeof Container;

const StyledTypograpthy = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 'inherit',
  fontWeight: 'normal',
}));

const AdminGenericTextCell = <T extends object>(
  WrappedComponent: ComponentType<T>,
) => {
  const TextCell = (props: ICellRendererParams<T>) => {
    const { node } = props;
    return (
      <StyledContainer custom-rowHeight={node.rowHeight}>
        <StyledTypograpthy>
          <WrappedComponent {...(props as T)} />
        </StyledTypograpthy>
      </StyledContainer>
    );
  };
  return TextCell;
};

export default AdminGenericTextCell;
