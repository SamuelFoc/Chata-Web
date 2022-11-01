import React from "react";
import Fade from "react-reveal/Fade";

import "./SecondPage.css";
import "./Phone.css";
import "./Medium.css";

const SecondPage = () => {
  return (
    <div className="mainSecondPageContainer">
      <Fade bottom>
        <div className="secondPageContent">
          <div className="secondPageTitle">
            <h1>Enjoy the view</h1>
          </div>
          <div className="secondPageImages">
            <div className="d-sm-flex imageBox">
              <img src="/oldCottage1.png" alt="old-cottage" />
              <img src="/oldCottage2.png" alt="old-cottage" />
              <img src="/oldCottage3.png" alt="old-cottage" />
            </div>
            <div className="secondPageButton">
              <button className="btn btnCustom">Gallery</button>
            </div>
          </div>
        </div>
      </Fade>

      <img src="/wood.png" alt="wood" className="secondPageWood" />
    </div>
  );
};

export default SecondPage;
