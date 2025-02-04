import React, { useEffect } from 'react';
import { useAppDispatch } from '@/libs/redux/hooks';
import { fetchBanners } from '@/libs/redux/features/paltformConfigs/ManageBannersSlice';

const ManageBanners = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  return <div>{/* <ManageBannersList /> */}</div>;
};

export default ManageBanners;
