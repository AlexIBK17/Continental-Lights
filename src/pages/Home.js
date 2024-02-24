import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import light from "../assets/light.png";

const Home = () => {
  return (
    <div>
      {/* LANDING PAGE  */}
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="text col-md-6">
              <h1>Hey There!</h1>
              <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Welcome to Continental Building Systems",
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
              <img src="/image/backgroundImg2.jpg" alt="logo" />
              <img src="/image/backgroundImage.jpg" alt="logo" />
              <img src="/image/back-img3.jpg" alt="logo" />
            </div>
          </div>
        </div>
      </header>
      <section>
        {/* ABOUT SECTION  */}
        <div className="about-sec">
          <div className="container">
            <div className="row">
              <h2>About</h2>
              <p className="col-md-6">
                <img className="about-img" src={light} alt="" />
              </p>
              <p className="col-md-6">
                Continental Building Systems is a leading supplier of exquisite
                building fixtures, specializing in lighting fixtures and
                furniture. With a mission to enhance the aesthetic appeal of
                structures, our goal is to provide splendid fixtures that
                elevate the look of retail, commercial, and residential spaces.
                Committed to excellence, we aspire to become the premier choice
                for building fixtures in North America.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
