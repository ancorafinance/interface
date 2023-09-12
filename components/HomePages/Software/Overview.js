import React from "react";
import Image from "next/image";

import overviewImg1 from "@/public/images/overview/overview1.png";
import overviewImg2 from "@/public/images/overview/overview2.png";
import images2 from "@/public/images/images2.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-50">
      <div className="container">


        <div className="overview-box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 overview-content">
              <span className="sub-title">LP Farm</span>
              <h2>Lp farms or yield farming </h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="1200">
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Stake LP token to earn rewards
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Management support
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Enterprise account
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Market analysis
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 imagegas">
            <video className="w-100" autoPlay loop muted playsinline>
      <source
        src="./images/video8.mp4"
        type="video/mp4"
        allowFullScreen
      />
    </video>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
