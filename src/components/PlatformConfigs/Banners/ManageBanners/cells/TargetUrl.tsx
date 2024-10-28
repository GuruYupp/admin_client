import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import { Typography, styled } from '@mui/material';
import Container, { ContainerProps } from '@mui/material/Container';
import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';

interface TargetUrlStyledContainerPropsInterface extends ContainerProps {
  'custom-rowHeight'?: number;
}

const shouldForwardProp = (
  prop: TargetUrlStyledContainerPropsInterface[keyof ContainerProps],
) => !prop.startsWith('custom');

const TargetUrlStyledContainer = styled(Container, {
  shouldForwardProp,
})<TargetUrlStyledContainerPropsInterface>(
  ({ 'custom-rowHeight': rowHeight }) => ({
    '&.MuiContainer-root': {
      padding: '0px',
      display: 'flex',
      height: `${rowHeight}px`,
      justifyContent: 'start',
      alignItems: 'center',
    },
  }),
) as typeof Container;

const StyledTypograpthy = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

const TargetUrl = (props: ICellRendererParams<BannerInterface>) => {
  const { data, node } = props;
  return (
    <TargetUrlStyledContainer custom-rowHeight={node.rowHeight}>
      <StyledTypograpthy>{data?.targetPath}</StyledTypograpthy>
    </TargetUrlStyledContainer>
  );
};

export default TargetUrl;
