import React from "react";
import { useState } from "react";
import MeetingCard from "../components/MeetingCard";

const UpcommingMeeting = () => {


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
    <div className="page">
      <h1>Upcomming Meeting</h1>


<div className="meeting-container">
{
        meetings.filter((meeting)=>{
              let today = new Date()
              return (new Date(meeting.date) > today)
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

export default UpcommingMeeting;
