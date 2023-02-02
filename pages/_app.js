import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PopularContextProvider } from "../context/PopularContext";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [router]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PopularContextProvider>
        <Layout route={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </PopularContextProvider>
    </>
  );
}
