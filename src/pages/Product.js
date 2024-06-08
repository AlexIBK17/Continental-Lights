import React, { useState, useEffect } from "react";
import "../styles/product.css";
import Card from "../components/card";
import { getProduct } from "../api/apiHandler";
import Filter from "../components/filter";
import CatigoryFilter from "../components/CatigoryFilter";

const Product = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [displayedResults, setDisplayedResults] = useState([]);
  const [showReset, setShowReset] = useState(false);
  const [noProductFound, setNoProductFound] = useState(false);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["title"]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    async function fetchAndProcessProducts() {
      try {
        setisLoading(true);
        const response = await getProduct();
        const data = response.data;
        setApiData(data);
        setDisplayedResults(data);
        setQ("");
        setNoProductFound(false);
        setisLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching and processing products:", error);
      }
    }

    fetchAndProcessProducts();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProducts(category, q);
  };

  // Function to filter products based on category and search query
  const filterProducts = (category, query) => {
    let filtered = apiData;
    if (category) {
      filtered = filtered.filter((product) => product.catigory === category);
    }
    if (query) {
      filtered = filtered.filter((product) =>
        searchParam.some(
          (newItem) =>
            product[newItem]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
        )
      );
    }
    setDisplayedResults(filtered);
    setNoProductFound(filtered.length === 0);
    setShowReset(filtered.length > 0 && query);
  };

  // Function to handle search button click
  const handleSearchClick = () => {
    filterProducts(selectedCategory, q);
  };

  // Function to handle reset button click
  const handleResetClick = () => {
    setQ("");
    setSelectedCategory(null);
    filterProducts(null, "");
  };

  return (
    <div className="container-fluid main">
      <div className="row">
        {/* FILTER SIDE BAR */}
        <div className="filter-bar col-md-2">
          <h1>This is side bar</h1>
          <CatigoryFilter
            categories={apiData.map((product) => product.catigory)}
            onSelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="over col-md-10">
          {/* FILTER SIDE BAR */}
          <Filter
            setValue={setQ}
            value={q}
            onSearchClick={handleSearchClick}
          />{" "}
          <span>
            {showReset && <button onClick={handleResetClick}>Reset</button>}
          </span>
          {/* CARD TO DISPLAY PRODUCTS */}
          {isLoading ? <p>Loading please wait......</p> : null}
          {noProductFound && <h1>Opps, Product not found</h1>}
          <div className="product-list">
            {displayedResults.map((product, index) => (
              <div className="" key={index}>
                {/* Adjust the col-md-4 to your desired column size for different screen sizes */}
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
