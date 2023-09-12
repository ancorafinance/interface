import React from "react";
import Link from "next/link";
import Image from "next/image";

import images1 from "@/public/images/img-phone.png";

const HelpDesk = () => {
  return (
    <div className="wp-help">
    <div className="help-desk-area pb-50 section1">
      <div className="container">
        <div className="section-title">
          <h2>Swap tokens at near<span> zero gas fees</span></h2>
          <p>Ancora AMM simplifies ERC-20 token trading via automated pools for speed, security, 
            and cost-effectiveness. Users retain asset control and transaction safety.</p>
        </div>
        <div className="imagegas desktop">
    <video className="w-100" autoPlay loop muted playsinline>
      <source
        src="./images/video5.mp4"
        type="video/mp4"
        allowFullScreen
      />
    </video>
              
        </div>
        <div className="imagegas mobile">
        <Image src={images1} data-aos="fade-up" alt="overview" />
        </div>
        <div className="wp-button">
        <Link href="/contact">
          <a className="btn-style-one  button-70">
           Swap Now
          </a>
        </Link>
        </div>
      </div>
    </div>
   </div> 
  );
};

export default HelpDesk;
