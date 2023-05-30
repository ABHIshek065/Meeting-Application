import React from "react";

const MeetingCard = (props) => {
  return (
      <div className="meeting-card">
        <img src={"https://source.unsplash.com/1600x1100/?" + props.img} />
        <div className="meeting-card-body">
          <h3>{props.title}</h3>
          <p>{props.date}</p>
     
      </div>
    </div>
  );
};

export default MeetingCard;
