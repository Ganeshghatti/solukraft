import React, { useEffect } from "react";
import "./Hero.scss";
import Landing_design from "../../Images/Landing_Page2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  useEffect(() => {
    gsap.from(
      ".hero-caption",
      {
        x: "-70px",
        opacity: 0,
        once: true,
        scrollTrigger: {
          trigger: ".hero-section",
        },
      },
    );
    gsap.from(
      ".hero-know-more",
      {
        x: "-70px",
        opacity: 0,
        once: true,
        scrollTrigger: {
          trigger: ".hero-section",
        },
      },
    );
  }, []);

  return (
    <div className="hero-section">
      {window.innerWidth < 900 ? (
        <img src={Landing_design} alt="" className="Landing_page_design" />
      ) : (
        ""
      )}
      <p className="hero-caption">
        Building the most
        <br />
        <span className="blue_color">
          affordable &
          <br />
          standard &nbsp;
        </span>
        drug
        <br />
        delivery dispenser
      </p>
      <button type="button" className="hero-know-more">
        Know More
      </button>
    </div>
  );
}
