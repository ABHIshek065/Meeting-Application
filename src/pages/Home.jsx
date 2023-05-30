import React from "react";
import Hero from "../assests/img/hero-illustration.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import MeetingCard from "../components/MeetingCard";

const Home = () => {
  const [meetings, setMeetings] = useState([])
  fetch("https://meeting-9d1af-default-rtdb.firebaseio.com/meet.json").then(response => response.json()).then(data =>{
    let tempMeetings = []
    console.log(data);
for(const key in data ){
  let meeting = {
    id:key,
    ...data[key]
  }
  tempMeetings.push(meeting)
}
setMeetings(tempMeetings)
  })



  return (
    <div className="page-sm">
      <div className="hero">

      <img src={Hero} height={230} alt="" />
      <h1 className='title text-center'>Organize all your Live 🤙 <span className='highlight'>meetings</span>  in one place</h1>
      <Link to='/AddMeetings' className='add-btn-home' >Add New Meeting</Link>
    </div>

   <div className="meeting-container">
   {
        meetings.filter((meeting)=>{
          let today = new Date()
          let meetingDate = new Date(meeting.date)
              return meetingDate.setHours(0,0,0,0)===today.setHours(0,0,0,0);
        }).map((meeting)=>{
        const options = {weekday:'long', year:'numeric', momth:'long', day:'numeric'}
        let date = new Date(meeting.date)
        let fDate = date.toLocaleDateString('en', options)
          return <MeetingCard title={meeting.title} img={meeting.img} date={fDate}/>
        })
      } 
   </div>
    </div>

    

    
  );
};

export default Home;
