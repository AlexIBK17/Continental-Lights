import React, { useState, useEffect } from "react";
// import "../styles/home.css";
import "../styles/product.css";
import Card from "../components/card";
// import { useProductContext } from "../context/ProductContext";
import { getProduct } from "../api/apiHandler";
import Filter from "../components/filter";
import ProductNav from "../components/productNav";

const Product = () => {
  // const { products } = useProductContext();
  const [apiData, setApiData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchAndProcessProducts() {
      try {
        const response = await getProduct();
        const data = response.data;
        setApiData(data);
        // Process response and
        console.log(data);
        // Do something with the UI;
      } catch (error) {
        console.error("Error fetching and processing products:", error);
      }
    }

    fetchAndProcessProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? apiData.filter((product) => product.catigory === selectedCategory)
    : apiData;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container-fluid main">
      <div className="row">
        {/* FILTER SIDE BAR */}
        <div className="filter-bar col-md-2">
          <h1>This is side bar</h1>
          <ProductNav
            categories={apiData.map((product) => product.catigory)}
            onSelect={handleCategorySelect}
          />
        </div>
        <div className="over col-md-10">
          {/* FILTER SIDE BAR */}
          <Filter />
          {/* CARD TO DISPLAY PRODUCTS */}
          <div className="product-list">
            {filteredProducts.map((product, index) => (
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
