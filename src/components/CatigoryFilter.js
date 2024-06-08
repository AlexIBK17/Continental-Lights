import { useEffect, useState } from "react";
import "../styles/prodNav.css";

const CatigoryFilter = ({ categories, onSelect }) => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    // Create a Set to store unique categories
    const uniqueCategorySet = new Set(categories);
    // Convert the Set back to an array
    const uniqueCategoryArray = Array.from(uniqueCategorySet);
    setUniqueCategories(uniqueCategoryArray);
  }, [categories]);

  return (
    <div className="prodNavContainer">
      Catigory
      <form className="prodCatigory">
        <label>
          <input
            type="radio"
            className="catigory-btn"
            name="category"
            value=""
            onChange={() => onSelect("")}
          />
          All
        </label>
        {uniqueCategories.map((category) => (
          <label key={category}>
            <input
              type="radio"
              className="catigory-btn"
              name="category"
              value={category}
              onChange={() => onSelect(category)}
            />
            {category}
          </label>
        ))}
      </form>
    </div>
  );
};

export default CatigoryFilter;
