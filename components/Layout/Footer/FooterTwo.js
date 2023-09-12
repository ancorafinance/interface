import React from "react";
import Link from "next/link";
import Image from "next/image";

import imgIconDiscord from "@/public/images/icon/imgIconDiscord.png";
import imgIconTele from "@/public/images/icon/imgIconTele.png";
import imgIconTw from "@/public/images/icon/imgIconTw.png";
import imgIconWeb from "@/public/images/icon/imgIconWeb.png";
import imgIconYt from "@/public/images/icon/imgIconYt.png";
import whiteLogo from "@/public/images/logo.png";


const FooterTwo = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-two">
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-4 col-md-5">
              <Link href="/">
                <a className="logo">
                  <Image src={whiteLogo} alt="logo" />
                </a>
              </Link>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={imgIconDiscord} alt="icon" />
                    
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={imgIconTele} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <Image src={imgIconTw} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={imgIconWeb} alt="icon" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={imgIconYt} alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="wp-footer">
                <ul className="quick-links">
                    <li>
                      <Link href="/">
                        <a>Trade</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/software">
                        <a>Pools</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/business">
                        <a>Farm</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/app">
                        <a>App</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insurance">
                        <a>Bridge</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/insurance">
                        <a>Documents</a>
                      </Link>
                    </li>
                </ul>
                <div className="copyright">
                  <p>
                    Copyright &copy; {currentYear}. All Rights Reserved  {" "}
                    <a
                      href="https://Ancora.Finance/"
                      target="_blank"
                      rel="noreferrer"
                    >
                     Ancora.Finance
                    </a>
                  </p>
                </div>
              </div>   
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
