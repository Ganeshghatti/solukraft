import React, { useState, useEffect, useRef } from "react";
import Hero from "./Component/Hero/Hero";
import Why_solukraft from "./Component/Why-solukraft/Why_solukraft";
import "./App.scss";
import logo from "./Images/Black_logo.png";
import About_us from "./Component/About-us/About_us";
import Team from "./Component/Team/Team";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Products from "./Component/Products/Products";
import Contact_us from "./Component/Contact-us/Contact_us";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "react-scroll-trigger";
import Footer from "./Component/Footer/Footer";

export default function App() {
  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  const [menu, setmenu] = useState(false);
  const [navbaricon, setnavbaricon] = useState(true);
  const [layout, setlayout] = useState(false);
  const [closeicon, setcloseicon] = useState(false);

  const hamburgur = () => {
    setcloseicon(!closeicon);
    setmenu(!menu);
    setnavbaricon(!navbaricon);
    setlayout(!layout);
  };

  const animateOnScroll = () => {
    gsap.fromTo(
      ".pc-navbar",
      { y: "-70px", opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce", delay: 0 }
    );
  };
  return (
    <ScrollTrigger onEnter={animateOnScroll}>
      <>
        {layout == true ? (
          <div className="layout" onClick={hamburgur}></div>
        ) : (
          ""
        )}
        {menu == true ? (
          <div className="nav-bar-contents">
            <ul className="hamgurgur-menu">
              <li
                onClick={() => {
                  heroRef.current.scrollIntoView({ behavior: "smooth" });
                  hamburgur();
                }}
              >
                HOME
              </li>
              <li
                onClick={() => {
                  aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
                  hamburgur();
                }}
              >
                ABOUT US
              </li>
              <li>
                <Link
                  to="/career"
                  className="link-style"
                >
                  CAREER
                </Link>
              </li>
              <li
                onClick={() => {
                  contactUsRef.current.scrollIntoView({ behavior: "smooth" });
                  hamburgur();
                }}
              >
                CONTACT US
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <nav className="pc-navbar">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo"
            onClick={() =>
              heroRef.current.scrollIntoView({ behavior: "smooth" })
            }
          />
          {window.innerWidth > 1000 ? (
            <ul className="navbar-menu">
              <li
                onClick={() =>
                  heroRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                HOME
              </li>
              <li
                onClick={() =>
                  aboutUsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                ABOUT US
              </li>

              <li >
                <Link
                  to="/career"
                  className="link-style"
                >
                  CAREER
                </Link>
              </li>

              <li
                onClick={() =>
                  contactUsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                CONTACT US
              </li>
            </ul>
          ) : (
            <>
              {navbaricon == true ? (
                <FontAwesomeIcon
                  icon={faBars}
                  className="hamburgur-icon"
                  onClick={hamburgur}
                />
              ) : (
                ""
              )}
              {closeicon == true ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="close-icon"
                  onClick={hamburgur}
                />
              ) : (
                ""
              )}
            </>
          )}
        </nav>
        <div ref={heroRef}>
          <Hero />
        </div>

        <Why_solukraft />
        <div ref={aboutUsRef}>
          <About_us />
        </div>
        <Team />
        <Products />
        <div ref={contactUsRef}>
          <Contact_us />
        </div>
        <Footer />
      </>
    </ScrollTrigger>
  );
}