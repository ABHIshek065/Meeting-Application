import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo">
       Schedule Meetings
      </Link>
      <div className="links">
        <Link to="/UpcommingMeetings">Upcomming Meetings</Link>
        <Link to="/PastMeeting">Past meetings</Link>
        <Link to="/AddMeetings" className="btn">
          Add Meeting
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
