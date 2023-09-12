import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg9 from "@/public/images/banner/banner9.png";

const Banner = () => {
  return (
    <div className="software-banner-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="software-banner-content">
              <h1> <span>The First</span>    
              <span>DEX Build On</span>
Linea.</h1>
              <p>
              We have built the most advanced decentralized exchange
to support the zkSync ecosystem.              </p>
              <Link href="/contact">
                <a className="btn-style-one button-70">
                  Trade Now 
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="software-banner-image" data-aos="fade-up">
              <Image src={bannerImg9} alt="banner-image" />
            </div>
          </div>
        </div>

       
      </div>
      <div className="funfacts-area">
        <div className="container">
         
          <div className="wp_content">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="single-funfacts-item red-light-color">
              <p>Trading Volume</p>
                <h3>$20M</h3>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-funfacts-item red-light-color">
                
                <p>Total Value Locked</p>
                <h3>$180M</h3>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-funfacts-item red-light-color">
              <p>Integrations</p>
                <h3>300+</h3>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-3 col-sm-6 col-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-funfacts-item red-light-color">
              <p>Community Delegates</p>
                <h3>4,400+</h3>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
