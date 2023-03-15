import React from "react";

import "./Footer.css";
import { FaYoutube, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>
          E-<span>Commerce</span>
        </h1>
      </div>

      <a href="https://www.youtube.com/ ">
        <FaYoutube className="icon" />
      </a>
      <a href="https://github.com/">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebook className="icon" />
      </a>
      <a href="https://twitter.com/?lang=en">
        <FaTwitter className="icon" />
      </a>
      <div>
        <h5>
          <div>&copy; {year} All Rights Reserved</div>
        </h5>
      </div>
    </div>
  );
};

export default Footer;
