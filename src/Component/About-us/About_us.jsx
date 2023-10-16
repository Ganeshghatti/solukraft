import React,{useEffect} from "react";
import "./About_us.scss";
import about_us_design from "../../Images/about_us_design.png";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

export default function About_us() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".about_us_design", {
      x: "-100px",
      ease: "bounce",
      opacity: "0",
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: ".About-us",
      },
    });

    gsap.from(".about-us-title", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".About-us",
      },
    });
    gsap.from(".about-us-description", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".About-us",
      },
    });
  }, []);
  return (
    <div className="About-us">
      <img
        src={about_us_design}
        alt="about_us_design"
        className="about_us_design"
      />
      <div className="about-us-details">
        <p className="about-us-title">About Us?</p>
        <p className="about-us-description">
          Solukraft is a startup committed to providing high-quality drug
          delivery dispensers at an affordable price, with a focus on creating
          awareness about their benefits. Our first product, "Medrop" will be
          launched by June 2023. We believe that our products will revolutionize
          the way patients receive medication, and we look forward to building
          long-lasting relationships with our clients by leveraging the
          technology.
        </p>
      </div>
    </div>
  );
}
