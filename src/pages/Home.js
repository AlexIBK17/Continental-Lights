import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import Card from "../components/card";
import { getProduct } from "../api/apiHandler";
const Home = () => {
  const [topProd, setTopProd] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProduct();
        const data = response.data;
        const filteredProduct = data.filter((product) => {
          const price = parseFloat(product.price.replace("$", ""));
          return price > 100;
        });
        setTopProd(filteredProduct);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      {/* LANDING PAGE  */}
      <header className="header">
        <div className="">
          <div className="row hi">
            <div className="text">
              <h1>Hey There!</h1>
              <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Welcome to Revival Lights",
                  2000,
                  "We deliver Luminous Elegance",
                  2000,
                  "",
                ]}
                speed={30}
                wrapper="h6"
                repeat={Infinity}
              />
              <p className="welcome-text">
                Illuminate Your Space, Elevate Your Style! Welcome to
                Continental Building Systems, where brilliance meets design.
                Step into a world of innovative spot lighting fixtures that not
                only light up your surroundings but also redefine the ambiance
                of your space. Unleash the power of radiance with our
                cutting-edge luminaires &ndash;because your space deserves to
                shine as uniquely as you do!"
              </p>
              <button className="land-btn">
                <Link to="/prods">
                  <FontAwesomeIcon className="land-icon" icon={faCaretRight} />
                  Explore Our Products
                </Link>
              </button>
            </div>
            <div className="col-md-6 img-container">
              {/* <img src="/image/Exhibit 01.webp" alt="logo" />
              <img src="/image/Exhibit 02.webp" alt="logo" />
              <img src="/image/hanging lamp.jpg" alt="logo" /> */}
            </div>
          </div>
        </div>
      </header>
      {/* 
      .
      .
      */}
      <section>
        <div className="TopProd container-xl">
          <h2>Top Products</h2>
          Product images
          <div className="product-list-home">
            {topProd.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      {/* 
      .
      .
      .
      .
       */}
    </div>
  );
};

export default Home;
