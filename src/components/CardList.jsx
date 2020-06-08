import React from "react";
import "./CardList.css";
import CardItem from "components/CardItem";

export default function CardList({ items }) {
  return (
    <ul className="card-list">
      {items.map((item) => (
        <CardItem {...item} />
      ))}
    </ul>
  );
}
