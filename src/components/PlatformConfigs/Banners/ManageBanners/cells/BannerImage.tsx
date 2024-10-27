import { BannerInterface } from '@/adminTypes/ManageBannersTypes';
import { getImage } from '@/services/utils';
import { Container, styled } from '@mui/material';
import { ICellRendererParams } from 'ag-grid-community';
import React from 'react';

const StyledContainer = styled(Container)(() => ({
  '&.MuiContainer-root': {
    padding: '0px',
    // display:"flex"
  },
})) as typeof Container;

const StyledImageContainer = styled(Container)(() => ({
  '&.MuiContainer-root': {
    padding: '0px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})) as typeof Container;

const BannerImage = (props: ICellRendererParams<BannerInterface>) => {
  const { data } = props;
  return (
    <StyledContainer>
      <StyledImageContainer>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={getImage(data?.image || '')} alt="" width="150px" />
      </StyledImageContainer>
    </StyledContainer>
  );
};

export default BannerImage;
