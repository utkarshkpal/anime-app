import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <input
        value={value}
        onChange={handleChange}
        type="text"
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-btn"
        onClick={() => {
          onSearch(value);
        }}
      >
        Go
      </button>
    </div>
  );
}
