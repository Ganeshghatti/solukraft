import React, { useEffect } from "react";
import "./Why_solukraft.scss";
import Card from "./Card";
import Self_administration from "../../Images/why_solukraft/Self_administration.png";
import Reusability from "../../Images/why_solukraft/Reusability.png";
import syringe from "../../Images/why_solukraft/syringe.png";
import contamination from "../../Images/why_solukraft/contamination.png";
import Compatibility from "../../Images/why_solukraft/blood_test.png";
import funding from "../../Images/why_solukraft/funding.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import * as images from "../../Images/why_solukraft";
// This method produced errors

const data = [
  {
    img: syringe,
    title: "Consistent dosing",
    description:
      "Our drug delivery pen is designed to ensure accurate and consistent dosing, reducing the risk of under dosing or overdosing.",
  },
  {
    img: Reusability,
    title: "Reusability",
    description:
      "Our pen is reusable, reducing medical waste and promoting sustainable healthcare practices.",
  },
  {
    img: Self_administration,
    title: "Self administration",
    description:
      "Our pen allows patients to take their medication on their own schedule, without the need for frequent hospital or clinic visits.",
  },
  {
    img: Compatibility,
    title: "Compatibility",
    description:
      "Our drug delivery pen is compatible with a wide range of medications, making it a versatile solution for patients with different needs.",
  },
  {
    img: funding,
    title: "Affordable pricing",
    description:
      "Our pen is priced affordably, making it accessible to patients across all income levels.",
  },
  {
    img: contamination,
    title: "Prevents contamination",
    description:
      "Our pen's design prevents contamination, ensuring medication is delivered safely and effectively.",
  },
];
gsap.registerPlugin(ScrollTrigger);

export default function Why_solukraft() {
  useEffect(() => {
    gsap.from(".Why_solukraft-main-title", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".Why_solukraft",
      },
    });

    gsap.from(".Why_solukraft-main-description", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".Why_solukraft",
      },
    });

    gsap.from(".card", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ".Why_solukraft-main-description",
      },
    });
  }, []);

  return (
    <section className="Why_solukraft">
      <p className="Why_solukraft-main-title">Why Solukraft?</p>
      <p className="Why_solukraft-main-description">
        Revolutionizing healthcare with affordable and reusable drug delivery
        pens.
      </p>
      <div className="why-solukraft-container">
        {data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
