'use client';

import { appConfigsInstance, setAppConfigsAfterRender } from '@/appConfig';
import { loginVerify } from '@/libs/redux/features/auth/authSlice';
import { setAdminConstants } from '@/libs/redux/features/constants/constsSlice';
import { useAppDispatch } from '@/libs/redux/hooks';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

const RootLayout: FC<PropsWithChildren> = (props) => {
  const dispatch = useAppDispatch();

  const [isLoading, setisLoading] = useState<boolean>(true);
  useEffect(() => {
    let unmounted = false;
    if (unmounted) return;
    setAppConfigsAfterRender()
    dispatch(setAdminConstants(appConfigsInstance.Config.tenant));
    dispatch(loginVerify());
    setisLoading(false);
    return () => {
      unmounted = true;
    };
  }, [dispatch]);

  if (!isLoading) {
    return <>{props.children}</>;
  }
};

export default RootLayout;
