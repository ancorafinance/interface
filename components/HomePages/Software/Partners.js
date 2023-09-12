import React from "react";
import Image from "next/image";


import partnerImg1 from "@/public/images/partner-1.png";
import partnerImg2 from "@/public/images/partner-2.png";
import partnerImg3 from "@/public/images/partner-3.png";
import partnerImg4 from "@/public/images/partner-4.png";
import partnerImg5 from "@/public/images/partner-5.png";
import partnerImg6 from "@/public/images/partner-6.png";
import partnerImg7 from "@/public/images/partner-7.png";
import partnerImg8 from "@/public/images/partner-8.png";
import partnerImg9 from "@/public/images/partner-9.png";
import partnerImg10 from "@/public/images/partner-10.png";
import partnerImg11 from "@/public/images/partner-11.png";
import partnerImg12 from "@/public/images/partner-12.png";

const Partners = () => {
  return (
    <div className="partner-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12">
            <h3 className="tilte-partner">INVESTORS AND PARTNERS</h3>
            <div className="partner-item-lists desktop">
              <div className=" item-wp-partner item-1">
                  <div className="partner-item">
                    <Image src={partnerImg1} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg2} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg3} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg4} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg5} alt="partner-image" />
                  </div>
              </div>
              <div className="item-wp-partner item-2">
                  <div className="partner-item">
                    <Image src={partnerImg6} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg7} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg8} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg9} alt="partner-image" />
                  </div>
                
              </div>
              <div className=" item-wp-partner item-3">
                  <div className="partner-item">
                    <Image src={partnerImg10} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg11} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg12} alt="partner-image" />
                  </div>
                
              </div>
            </div>
            <div className="partner-item-lists   mobile">
              <div className=" item-wp-partner">
                  <div className="partner-item">
                    <Image src={partnerImg1} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg2} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg3} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg4} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg5} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg6} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg7} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg8} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg9} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg10} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg11} alt="partner-image" />
                  </div>
                  <div className="partner-item">
                    <Image src={partnerImg12} alt="partner-image" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
