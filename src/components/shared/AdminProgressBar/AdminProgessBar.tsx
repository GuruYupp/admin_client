'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const AdminProgessBar = () => {
  return (
    <ProgressBar
      color="#e7195a"
      startPosition={0.3}
      options={{ showSpinner: true }}
    />
  );
};

export default AdminProgessBar;
