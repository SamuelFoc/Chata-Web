import React from "react";
import Facebook from "../../components/Media/Facebook";
import Instagram from "../../components/Media/Instagram";
import Gmail from "../../components/Media/Gmail";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="mainFooterContainer text-center">
      <h1>Thank you for visiting our site</h1>
      <div className="d-flex justify-content-center">
        <div className="socialMedia mt-5 text-start">
          <Facebook />
          <Instagram />
          <Gmail />
        </div>
      </div>
      <div className="footerInfo">
        <span>Address: Hrabičov 272</span>
        <br />
        <span>Contact: +421 907 170 536</span>
        <br />
        <span>IČO: 123 654</span>
        <br />
        <span>DIČ: 987 456</span>
        <br />
      </div>
      <div className="footerSource">
        Ilustrations source: <a href="https://pexels.com">https://pexels.com</a>
      </div>
      <img src="/tree.png" alt="tree" />
    </div>
  );
};

export default Footer;
