import React from "react";
import "./CardList.css";
import CardItem from "components/CardItem";
import { useSelector } from "react-redux";

export default function CardList() {
  const items = useSelector((state) => state.search.items);

  return (
    <ul className="card-list">
      {items.map((item) => (
        <CardItem key={item.malId} {...item} />
      ))}
    </ul>
  );
}
