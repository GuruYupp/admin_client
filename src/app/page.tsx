import dynamic from 'next/dynamic';

const LazyDashboardDefalutPage = dynamic(
  () => import('@/pages/DashboardDefalutPage'),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <>
      <LazyDashboardDefalutPage />
    </>
  );
}
