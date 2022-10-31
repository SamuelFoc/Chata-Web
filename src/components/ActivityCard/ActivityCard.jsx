import React from "react";
import "./ActivityCard.css";

const ActivityCard = (props) => {
  return (
    <div className="activityCard">
      <div className="activityCardCover">
        <a href={props.url} className="activityCardTitle">
          {props.title}
        </a>
        <div className="activityCardText">
          <p>{props.description}</p>
        </div>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
};

export default ActivityCard;
