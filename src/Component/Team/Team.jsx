import React,{useEffect} from "react";
import "./Team.scss";
import Anupam from "../../Images/Team/anupam.png";
import rohan from "../../Images/Team/rohan.png";
import md from "../../Images/Team/md.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Team() {
  gsap.registerPlugin(ScrollTrigger);
  const team = [
    {
      name: "Mohammad Anees",
      photo: md,
      role: "Founder & CEO",
    },
    {
      name: "Anupam Mittal",
      photo: Anupam,
      role: "Mentor",
    },
    {
      name: "Rohan Raghunanda",
      photo: rohan,
      role: "Mentor",
    },
  ];
  useEffect(() => {
    gsap.from(".team-heading", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".team",
      },
    });

    gsap.from(".member", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      duration: 1,
      delay: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".team-heading",
      },
    });
  }, []);
  return (
    <>
      <div className="team">
        <p className="team-heading">Meet Our Team</p>
        <div className="team-members">
          {team.map((item, index) => (
            <div className="member" key={index}>
              <div className="member-hexagon-frame">
                <div className="member-hexagon-image-div">
                  <img
                    src={item.photo}
                    alt={item.photo}
                    className="member-hexagon-image"
                  />
                </div>
              </div>
              <p className="member-name">{item.name}</p>
              <p className="member-role">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
