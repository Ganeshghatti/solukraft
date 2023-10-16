import React from "react";
import "./Card.scss";

export default function Card({ img, title, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p className="why-solukaft-card-title">{title}</p>
      <p className="why-solukaft-card-description">{description}</p>
    </div>
  );
}
