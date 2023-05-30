import React from "react";
import Hero from "../assests/img/hero-illustration.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page-sm">
      <div className="hero">

      <img src={Hero} height={230} alt="" />
      <h1 className='title text-center'>Organize all your Live 🤙 <span className='highlight'>meetings</span>  in one place</h1>
      <Link to='/AddMeetings' className='add-btn-home' >Add New Meeting</Link>
    </div>
    </div>
  );
};

export default Home;
