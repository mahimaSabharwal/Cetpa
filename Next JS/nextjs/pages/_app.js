import Layout from "../common/Layout";
import Head from "next/head";
import { Roboto } from "@next/font/google";

import "bootstrap/dist/css/bootstrap.css";

//Styles
import "../styles/global.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout footerStatus={pageProps.footerStatus}>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
