import Layout from "../common/Layout";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout footerStatus={pageProps.footerStatus}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
