import Layout from "../components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout route={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}
