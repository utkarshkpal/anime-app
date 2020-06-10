import React from "react";
import "./CardItem.css";

export default function CardItem({ imageUrl, title, url }) {
  return (
    <li
      onClick={() => {
        window.open(url);
      }}
      className="image-card"
    >
      <img src={imageUrl} alt="card-img" />
      <div className="image-text">
        <p>{title}</p>
      </div>
    </li>
  );
}
