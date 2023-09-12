import React from "react";
import Link from "@/utils/ActiveLink";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import courseImg from "@/public/images/navbar.jpg";

const Navbar9 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area">
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
              <a className="navbar-brand">
                <Image  width={194}
      height={42} src={logo} alt="site logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link">Trade</a>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link href="#">
                    <a className=" nav-link">Pools</a>
                  </Link>

                </li>

                <li className="nav-item">
                  <Link href="#" activeClassName="active">
                    <a className=" nav-link">Farm</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="#" className=" nav-link">
Bridge                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className=" nav-link">
                    Documents
                  </a>
                </li>

                
              </ul>
            </div>

            <div className="others-option">
              <Link href="/pricing">
                <a className=" btn-style-one button-70 ">
                  LAUNCH DAPP
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar9;
