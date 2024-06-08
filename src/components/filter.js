import React from "react";
import { Button } from "./button";

const Filter = ({ value, setValue, onSearchClick }) => {
  const handleSearchChange = (event) => {
    setValue(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // If Enter key is pressed, trigger the search
      onSearchClick();
    }
  };
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="Search Product..."
        value={value}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      <Button buttonName={"search"} onClick={onSearchClick} />
    </div>
  );
};

export default Filter;
