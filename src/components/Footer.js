import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        {/* ABOUT SECTION  */}
        <div className="about-sec">
          <div className="container">
            <div className="row">
              <p className="col-md-6">
                <h2>About</h2>
                Continental Building Systems is a leading supplier of exquisite
                building fixtures, specializing in lighting fixtures and
                furniture. With a mission to enhance the aesthetic appeal of
                structures, our goal is to provide splendid fixtures that
                elevate the look of retail, commercial, and residential spaces.
                Committed to excellence, we aspire to become the premier choice
                for building fixtures in North America.
              </p>
              <div className="col-md-6">
                <h2>More</h2>
                <ul>
                  <li>About</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>
                    <FontAwesomeIcon icon={faInstagram} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
