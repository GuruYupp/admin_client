'use client';

import { useAppSelector } from '@/libs/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import DashBoardLayout from './DashboardLayout';
import * as appSelector from '@/libs/redux/selectors';

const AppLayout: FC<PropsWithChildren> = ({ children }) => {

  const isLoggedin = useAppSelector(appSelector.selectisLoggedIn)
  const router = useRouter();
  const pathname = usePathname();

  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    setisLoading(false);
  }, []);

  useEffect(() => {
    if (pathname !== '/login' && !isLoggedin) {
      router.replace('/login');
    }
  }, [pathname, router, isLoggedin]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!isLoading && (isLoggedin || pathname === '/login')) {
    if (pathname === '/login') {
      return <>{children}</>;
    }
    return <DashBoardLayout>{children}</DashBoardLayout>;
  }
};

export default AppLayout;
