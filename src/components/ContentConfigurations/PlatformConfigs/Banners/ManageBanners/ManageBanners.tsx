import AppTextField from '@/components/shared/AppTextField/AppTextField';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '@/libs/redux/hooks';
import { fetchBanners } from '@/libs/redux/features/paltformConfigs/ManageBannersSlice';
import ManageBannersSelect from './ManageBannersSelect';
import ManageBannersList from './ManageBannersList';

const ManageBannersForm = styled('div')(({ theme }) => ({
  '& form': {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
    'label': {
      // width: '25%',
      // minWidth:'25%',
      boxSizing: 'border-box',
      fontSize: '0.8rem',
      padding: '10px',
      [theme.breakpoints.between('md', 'xl')]: {
        flex: '0 0 25%',
        maxWidth: '25%',
        width: '25%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        flex: '0 0 50%',
        maxWidth: '50%',
        width: '50%',
      },
      [theme.breakpoints.down('sm')]: {
        flex: '0 0 100%',
        maxWidth: '100%',
        width: '100%',
      },
    },
  },
}));

const ManageBannersTextField = styled(AppTextField)(() => ({
  width: '100%',
  '.MuiInputBase-root': {
    height: '35px',
  },
}));

const ManageBannersSearchButton = styled(Button)(({}) => ({
  alignSelf: 'end',
  height: '35px',
  marginBottom: '10px',
  marginLeft: '10px',
}));

const ManageBanners = () => {
  const dispatch = useAppDispatch();
  const [networkId, setNetworkId] = useState<string>('');
  const [bannerId, setBannerId] = useState<string>('');
  const [bannerTitle, setBannerTitle] = useState<string>('');

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const handleSelectNetworkId = useCallback((networkId: string) => {
    setNetworkId(networkId);
  }, []);

  const handleChangeBannerId = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (/^\d+$/.test(e.target.value) || e.target.value === '')
        setBannerId(e.target.value);
    },
    [],
  );

  const handleChangeBannerTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setBannerTitle(e.target.value);
    },
    [],
  );

  const handleSearchBanners = () => {
    dispatch(
      fetchBanners({
        body: {
          networkId,
          ...(bannerId && { id: bannerId }),
          ...(bannerTitle && { name: bannerTitle }),
        },
      }),
    );
  };

  return (
    <div>
      <ManageBannersForm>
        <form>
          <label htmlFor="content partner">
            {' '}
            <strong>Contet Partner</strong>
            <ManageBannersSelect
              handleSelectNetworkId={handleSelectNetworkId}
            />
          </label>
          <label htmlFor="Banner Id">
            {' '}
            <strong>Banner Id</strong>
            <ManageBannersTextField
              size="small"
              placeholder="Banner Id"
              value={bannerId}
              onChange={handleChangeBannerId}
            />
          </label>
          <label htmlFor="Banner Title">
            {' '}
            <strong>Banner Title</strong>
            <ManageBannersTextField
              size="small"
              placeholder="Banner Title"
              value={bannerTitle}
              onChange={handleChangeBannerTitle}
            />
          </label>
          {/* <label htmlFor="Banner Search Button"> */}
          <ManageBannersSearchButton
            size="small"
            variant="contained"
            onClick={handleSearchBanners}>
            Search
          </ManageBannersSearchButton>
          {/* </label> */}
        </form>
      </ManageBannersForm>
      <ManageBannersList />
    </div>
  );
};

export default ManageBanners;
