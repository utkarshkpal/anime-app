import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, value, onUpdate }) {
  const handleChange = (e) => onUpdate(e.target.value);

  return (
    <div className="search-bar">
      <input
        value={value}
        onChange={handleChange}
        placeholder="naruto"
        type="text"
      />
      <button
        onClick={() => {
          onSearch(value);
        }}
      >
        Go
      </button>
    </div>
  );
}
