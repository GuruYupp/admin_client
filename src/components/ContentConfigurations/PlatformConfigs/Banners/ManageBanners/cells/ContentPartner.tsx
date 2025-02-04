import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import { useAppSelector } from '@/libs/redux/hooks';
import { selectNetworkList } from '@/libs/redux/selectors';
import { Container, Typography, styled } from '@mui/material';
import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';

const StyledContainer = styled(Container)(() => ({
  '&.MuiContainer-root': {
    padding: '0px',
    height: '100%',
    display: 'flex',
  },
})) as typeof Container;

const ContentPartner = (props: ICellRendererParams<BannerInterface>) => {
  const { data } = props;
  const networkList = useAppSelector(selectNetworkList);
  const getName = () => {
    if (data?.networkId === 0) return 'Global';
    return networkList.filter((network) => network.id === data?.networkId)[0]
      ?.name;
  };
  // console.log(data?.id);
  return (
    <StyledContainer>
      <Typography textAlign="left" alignSelf="center">
        {getName()}
      </Typography>
    </StyledContainer>
  );
};

export default ContentPartner;
