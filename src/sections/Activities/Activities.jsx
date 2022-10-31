import React from "react";
import Fade from "react-reveal/Fade";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import CardsData from "../../Data/Activities.json";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="mainActivitiesContainer">
      <img src="/woodInvert.png" alt="wood" />
      <Fade bottom>
        <div className="activitiesContent">
          <h3>Nearby Activities</h3>
          <div className="activitiesCards">
            {CardsData.map((card) => (
              <ActivityCard
                url={card.url}
                title={card.title}
                description={card.description}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Activities;
