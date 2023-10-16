import React, { useEffect } from "react";
import "./Products.scss";
import depilation from "../../Images/Products/depilation.png";
import fat from "../../Images/Products/fat.png";
import friends from "../../Images/Products/friends.png";
import rupees from "../../Images/Products/rupees.png";
import shield from "../../Images/Products/shield.png";
import skin from "../../Images/Products/skin.png";
import standard from "../../Images/Products/standard.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Products() {
  gsap.registerPlugin(ScrollTrigger);
  const data1 = [
    { title: "Affordability In Mind", img: rupees },
    { title: "Standard Design", img: standard },
    { title: "User Friendly Approach", img: friends },
    { title: "Safer Than Ever", img: shield },
  ];
  const data2 = [
    { title: "Intradecimal Drug Delivery", img: skin },
    { title: "Intra Muscle Drug Delivery", img: depilation },
    { title: "Sub Contenous Drug Delivery", img: fat },
  ];
  useEffect(() => {
    gsap.from(".products-first-row-left-text", {
      x: "-50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: ".products-first-row",
      },
    });
    gsap.from(".products-first-row-left-button", {
      x: "-50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0,
      scrollTrigger: {
        trigger: ".products-first-row-left-text",
      },
    });
    gsap.from(".Products-first-row-right-card", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".products-first-row-left-button",
      },
    });
    gsap.from(".Products-second-row-left-card", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".products-first-row-left-button",
      },
    });

    gsap.from(".products-second-row-right-text", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1.25,
      scrollTrigger: {
        trigger: ".Products-second-row-left-card",
      },
    });
    gsap.from(".products-second-row-right-button", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1.25,
      scrollTrigger: {
        trigger: ".Products-second-row-left-card",
      },
    });
  }, []);
  return (
    <section className="products">
      <div className="products-first-row">
        <div className="products-first-row-left">
          <p className="products-first-row-left-text">WE ARE BUILDING WITH</p>
          {window.innerWidth > 700 ? (
            <button className="products-first-row-left-button">
              View Products
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="products-first-row-right">
          {data1.map((item, index) => (
            <div className="Products-first-row-right-card" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="products-first-row-right-img"
              />
              <p className="products-first-row-right-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="products-second-row">
        <div className="products-second-row-left">
          {data2.map((item, index) => (
            <div className="Products-second-row-left-card" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="products-second-row-left-img"
              />
              <p className="products-second-row-left-text">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="products-second-row-right">
          <p className="products-second-row-right-text">WE ARE BUILDING FOR</p>
          <button className="products-second-row-right-button">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}
