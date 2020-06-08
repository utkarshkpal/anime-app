import React from "react";
import "./CardItem.css";
import img from "naruto.jpg";

export default function CardItem({ imageUrl, malId, title, url }) {
  return (
    <li
      onClick={() => {
        window.open(url);
      }}
      key={malId}
      className="image-card"
    >
      <img src={imageUrl} alt="image" />
      <div className="image-text">
        <p>{title}</p>
      </div>
    </li>
  );
}
