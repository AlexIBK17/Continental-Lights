import React, { useState, useEffect } from "react";
// import { useProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/apiHandler";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await getProductById(id);
        const data = response.data;
        console.log(data.foundProduct);
        setProduct(data.foundProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <h1>lighitn details</h1>
      <Link to="/prods">
        <h1>Go backk</h1>
      </Link>
      {product && (
        <>
          <img src={product.imageURL} alt="" />
          <div className="series-container">
            {product.series.map((seriesItem, index) => (
              <div className="series-item" key={index}>
                <h1>Model:{seriesItem.model}</h1>
                <h1>Power:{seriesItem.power}</h1>
                <h1>Size:{seriesItem.size}</h1>
                <h1>Cut-out:{seriesItem.cutOut}</h1>
                <h1>Beam-angle:{seriesItem.beamAngle}</h1>
                <h1>Temperature:{seriesItem.temperature}</h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
