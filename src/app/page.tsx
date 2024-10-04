import dynamic from 'next/dynamic';

const LazyCounter = dynamic(() => import('@/components/Counter'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LazyCounter />
    </>
  );
}
