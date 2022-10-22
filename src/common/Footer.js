import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import '../App.css';

  const Footer = () => {
  return (
    <>
    <div class="social-container">
      <h3>Social Follow</h3>
      <a href="https://www.youtube.com"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <p classsName='copyright'>Copyright (c) 2011-2022 by Authors</p>
</div>
    </>
    )
}
export default Footer;

