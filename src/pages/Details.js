import React, { useState, useEffect } from "react";
// import { useProductContext } from "../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/apiHandler";
import { Button } from "../components/button";
import "../styles/details.css";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [hasSeries, setHasSeries] = useState(false);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await getProductById(id);
        const data = response.data;
        console.log(data.foundProduct.series);
        const series = data.foundProduct.series;
        setProduct(data.foundProduct);
        series.length === 0 ? setHasSeries(true) : setHasSeries(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    }

    fetchProductDetails();
  }, [id]);

  return (
    <div className="details-header">
      {product && (
        <>
          <div className="row justify-content-start">
            <Link className="col-4" to="/prods">
              <Button buttonName={"Go backk"} />
            </Link>
            <h1 className="col-6">{product.title}</h1>
          </div>
          <img className="detailsImg" src={product.imageURL} alt="" />
          <div className="series-container">
            {hasSeries ? (
              <div className="series-item">
                <p>Model: N/A</p>
                <p>Power: N/A</p>
                <p>Size: N/A</p>
                <p>Cut-out: N/A</p>
                <p>Beam-angle: N/A</p>
                <p>Temperature: N/A</p>
              </div>
            ) : null}
            {product.series.map((seriesItem, index) => (
              <div className="series-item" key={index}>
                <p>Model:{seriesItem.model}</p>
                <p>Power:{seriesItem.power}</p>
                <p>Size:{seriesItem.size}</p>
                <p>Cut-out:{seriesItem.cutOut}</p>
                <p>Beam-angle:{seriesItem.beamAngle}</p>
                <p>Temperature:{seriesItem.temperature}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
