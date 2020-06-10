import React from "react";
import "./CardList.css";
import CardItem from "components/CardItem";
import { useSelector } from "react-redux";

export default function CardList() {
  const items = useSelector((state) => state.app.items);

  return (
    <>
      <ul className="card-list">
        {items.map((item) => (
          <CardItem {...item} />
        ))}
      </ul>
    </>
  );
}
