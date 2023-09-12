import React from "react";
import Navbar9 from "@/components/Layout/Navigations/Navbar9";
import Banner from "@/components/HomePages/Software/Banner";
import HelpDesk from "@/components/HomePages/Software/HelpDesk";
import Partners from "@/components/HomePages/Software/Partners";
import Overview from "@/components/HomePages/Software/Overview";
import WhatWeDo from "@/components/HomePages/Software/WhatWeDo";
import FooterTwo from "@/components/Layout/Footer/FooterTwo";

const Software = () => {
  return (
    <>
      <Navbar9 />
      <Banner />
      <HelpDesk />
      <Overview />
      <WhatWeDo />
      <Partners />
      <FooterTwo />
    </>
  );
};

export default Software;