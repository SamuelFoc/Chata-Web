import React, { useRef } from "react";
import Activities from "./sections/Activities/Activities";
import Booking from "./sections/Booking/Booking";
import FirstPage from "./sections/FirstPage/FirstPage";
import Footer from "./sections/Footer/Footer";
import SecondPage from "./sections/SecondPage/SecondPage";

const App = () => {
  const firstPageRef = useRef(null);
  const secondPageRef = useRef(null);
  const activitiesRef = useRef(null);
  const bookingRef = useRef(null);

  const executeScroll = (myRef) => myRef.current.scrollIntoView();

  return (
    <div className="mainPageDock">
      <div ref={firstPageRef} className="mainPageSectionIntro">
        <FirstPage
          scrollTo={executeScroll}
          referencies={[firstPageRef, secondPageRef, activitiesRef, bookingRef]}
        />
      </div>
      <div ref={secondPageRef} className="mainPageSection">
        <SecondPage />
      </div>
      <div ref={activitiesRef} className="mainPageSectionActivities">
        <Activities />
      </div>
      <div ref={bookingRef} className="mainPageSection">
        <Booking />
      </div>
      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default App;
