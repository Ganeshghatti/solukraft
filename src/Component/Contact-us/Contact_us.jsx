import React, { useEffect, useState } from "react";
import "./Contact_us.scss";
import bg from "../../Images/Contact/contact_bg.png";
import Get_In_Touch from "../../Images/Contact/Get_In_Touch.png";
import Contact_Logo from "../../Images/Contact/Contact_Logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Contact_us() {
  gsap.registerPlugin(ScrollTrigger);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxPQvmfJMcvd7Km0_iMO1GnurbGKJLXKtWh0QgC8k3aWt5X-1dB89gZ_33Fo-vR3ERm/exec";

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid =
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.phone &&
      formData.message;

    if (!isFormValid) {
      toast.error("Please enter all required data", {
        toastStyle: {
          background: "white",
          color: "red",
        },
      });
    } else {
      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);

      // Send the form data to the Google Sheets script URL using fetch
      fetch(scriptURL, { method: "POST", body: formDataToSend })
        .then((response) => {
          // Clear the form fields upon successful submission
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });

          toast.success("Success! We will contact you as soon as possible", {
            toastStyle: {
              background: "white",
              color: "black",
            },
          });
        })
        .catch((error) => {
          toast.error("An error occurred while submitting the form", {
            toastStyle: {
              background: "white",
              color: "red",
            },
          });
        });
    }
  };
  useEffect(() => {
    gsap.from(".contact-left-div", {
      x: "-50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".Contact_us",
      },
    });
    gsap.from(".contact-right-getintouch-text", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".Contact_us",
      },
    });
    gsap.from(".contact-right-description", {
      x: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".contact-right-getintouch-text",
      },
    });
    gsap.from("input", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-right-description",
      },
    });
    gsap.from("textarea", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-right-description",
      },
    });
    gsap.from(".contact-right-submit", {
      y: "50px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 2.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".contact-right-description",
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="Contact_us">
      <div className="contact-left-div">
        {window.innerWidth > 1250 ? <img src={bg} alt="bg" /> : ""}
        <img src={Get_In_Touch} alt="Get in Touch" className="Get_In_Touch" />
      </div>
      <div className="contact-right-div">
        <p className="contact-right-getintouch-text">GET IN TOUCH</p>
        <p className="contact-right-description">
          Our friendly team would love to hear from you!
        </p>
        <form>
          <div className="contact-right-name-div">
            <input
              className="contact-right-firstname"
              type="text"
              placeholder="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <input
              className="contact-right-lastname"
              type="text"
              placeholder="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <input
            className="contact-right-email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="contact-right-phone"
            type="number"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="contact-right-message"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            className="contact-right-submit"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={true}
            newestOnTop={true}
            toastStyle={{
              background: "white",
              color: "black",
            }}
            progressBarStyle={{
              background: "#FF0000",
            }}
            limit={3}
          />
        </form>
      </div>
    </section>
  );
}
