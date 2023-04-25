import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer__social">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div> */}
      <div className="footer__copy">
        <span>&copy; 2023 Group 13. All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
