import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css/bundle";
import "react-tabs/style/react-tabs.scss";
import "/styles/faq.scss";
import "/styles/global.scss";
import "/styles/style.scss";
import "/styles/header.scss";
import "/styles/footer.scss";
import "/styles/responsive.scss";

import ScrollToTop from "@/components/Layout/ScrollToTop";

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta 
          charSet="utf-8" 
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1" 
        />
        <title>The First DEX Build OnLinea</title>
      </Head>

      <Component {...pageProps} />
      
      <ScrollToTop />
    </>
  );
}

export default MyApp;
