import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon5 from "@/public/images/img41.png";
import icon6 from "@/public/images/img42.png";
import icon7 from "@/public/images/img43.png";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-area">
      <div className="container">
        <div className="section-title">
          
          <h2>Manage Your Transactions In One Place </h2>
          <p>
          You can buy and sell 150+ cryptocurrencies with 20+ fiat currencies
using bank transfers on your credit or debit card
              </p>

        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-what-we-do-box">
              <div className="icon">
                <Image width={150} height={150} src={icon5} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  <a>Deadline Reminders</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="single-what-we-do-box">
              <div className="icon">
                <Image width={150}  height={150} src={icon6} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  <a>Information Retrieval</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-4 col-sm-4"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="single-what-we-do-box">
              <div className="icon">
                <Image width={150}  height={150} src={icon7} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  <a>Simple Dashboard</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
