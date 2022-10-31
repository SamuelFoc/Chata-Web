import React from "react";
import Activities from "./sections/Activities/Activities";
import FirstPage from "./sections/FirstPage/FirstPage";
import Footer from "./sections/Footer/Footer";
import SecondPage from "./sections/SecondPage/SecondPage";

const App = () => {
  return (
    <div className="mainPageDock">
      <div className="mainPageSectionIntro">
        <FirstPage />
      </div>
      <div className="mainPageSection">
        <SecondPage />
      </div>
      <div className="mainPageSectionActivities">
        <Activities />
      </div>
      <div className="mainPageSection">
        <h1>4. Section</h1>
      </div>
      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
};

export default App;
