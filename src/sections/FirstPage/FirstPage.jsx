import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Fade from "react-reveal/Fade";

import "./FirstPage.css";
import "./Medium.css";
import "./Small.css";
import "./Phone.css";

const FirstPage = (props) => {
  const [isOpen, setOpen] = useState(false);

  const openCloseMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="mainFirstPageContainer">
      <nav className="navBar">
        <h3 className="navBarTitle">CHATA ADAMOVKA</h3>
        <ul className="navBarListBig">
          <li onClick={() => props.scrollTo(props.referencies[0])}>Home</li>
          <li onClick={() => props.scrollTo(props.referencies[1])}>Views</li>
          <li onClick={() => props.scrollTo(props.referencies[2])}>
            Activities
          </li>
          <li onClick={() => props.scrollTo(props.referencies[3])}>Booking</li>
        </ul>
        <div className="hamburgerIcon">
          <Hamburger toggled={isOpen} toggle={openCloseMenu} />
        </div>
        {isOpen && (
          <ul className="navBarList">
            <li>About us</li>
            <li>Nearby</li>
            <li>Reservations</li>
            <li>Reviews</li>
          </ul>
        )}
      </nav>
      <div className="motto">
        <h1>Relax in</h1>
        <h1>peacefull nature</h1>
      </div>
      <Fade bottom>
        <div className="banner">
          <ul>
            <li>
              <strong>365</strong>
              <p>Lorem ipsum 365 dolor sit amet.</p>
            </li>
            <li>
              <strong>53</strong>
              <p>Lorem ipsum 365 dolor sit amet.</p>
            </li>
            <li>
              <strong>9.8/10</strong>
              <p>Lorem ipsum 365 dolor sit amet.</p>
            </li>
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default FirstPage;
