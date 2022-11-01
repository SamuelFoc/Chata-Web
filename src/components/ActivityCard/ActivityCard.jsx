import React from "react";
import "./ActivityCard.css";
import "./Phone.css";
import "./Medium.css";

const ActivityCard = (props) => {
  return (
    <div className={`activityCard ${props.id}`}>
      <div className="activityCardCover">
        <a href={props.url} className="activityCardTitle">
          {props.title}
        </a>
        <div className="activityCardText">
          <p>{props.description}</p>
        </div>
      </div>
      <style>
        {`.${props.id} {
            background-image: url("${props.img}")
          }`}
      </style>
    </div>
  );
};

export default ActivityCard;
