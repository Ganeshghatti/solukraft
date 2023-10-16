import React, { useRef } from "react";
import "./Career.scss";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import careerbg from "../../Images/careerbg.png";

export default function Career() {
  const noopening = useRef(null);
  return (
    <section className="career">
      <div className="career-hero">
        <nav className="career-nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>BACK</p>
          </Link>
        </nav>
        <div className="career-content-div">
          {window.innerWidth > 1300 ? (
            <>
              <p className="career-content-div-heading">
                Join our mission to improve &nbsp;
                <span className="career-content-text-blue">
                  medical
                  <br /> care &nbsp;
                </span>
                with our &nbsp;
                <span className="career-content-text-blue">
                  innovative drug delivery
                  <br /> dispenser pen!
                </span>
              </p>
              <p className="career-content-div-description">
                Revolutionizing healthcare with affordable and <br />
                reusable drug delivery pens.
              </p>
            </>
          ) : (
            <>
            <p className="career-content-div-heading">
              Join our mission to improve <br /> 
              <span className="career-content-text-blue">
                medical care &nbsp;
              </span>
              with our <br />
              <span className="career-content-text-blue">
                innovative drug delivery<br />
                 dispenser pen!
              </span>
            </p>
            <p className="career-content-div-description">
              Revolutionizing healthcare with <br /> affordable  and 
              reusable drug  delivery pens.
            </p>
          </>
          )}

          <button
            className="career-content-div-button"
            type="submit"
            onClick={() => {
              noopening.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Now!
          </button>
          <div className="career-phone-img-div">
            {window.innerWidth < 1300 ? (
              <img src={careerbg} alt="career" className="career-phone-img" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="career-no-opening-sec">
        <div className="career-noopening-div" ref={noopening}>
          <p className="career-noopening-text">No Openings Currently</p>
        </div>
        <div style={{ margin: " 0" }}>
          <Footer />
        </div>
      </div>
    </section>
  );
}
