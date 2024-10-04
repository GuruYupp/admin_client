import dynamic from "next/dynamic";

const LazyLoginPage = dynamic(()=>import("@/pages/LoginPage"),{ssr:false});

export default function Home() {
  return <><LazyLoginPage/></>;
}
