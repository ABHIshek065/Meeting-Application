import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddMeeting = () => {
  let titleInput = useRef();
  let Navigate = useNavigate()
  let imgInput = useRef();
  let dateInput = useRef();
  let [loader, setLoader] = useState(false);
  let linkInput = useRef();
  const addMeetingHandler = () => {
    setLoader(true);
    let tempMeetings = {
      title: titleInput.current.value,
      img: imgInput.current.value,
      date: dateInput.current.value,
      link: linkInput.current.value,
    };
    fetch("https://meeting2-354aa-default-rtdb.firebaseio.com/meet.json", {
      method: "post",
      body: JSON.stringify(tempMeetings),
    }).then(() => {
      setLoader(false);
      Navigate('/UpcommingMeetings')
    });
  };
  return (
    <div className="page-sm">
      <h1>AddMeeting</h1>

      <div>
        <input
          type="text"
          ref={titleInput}
          placeholder="Enter the Meeting Title"
        />
        <input
          type="text"
          ref={imgInput}
          placeholder="Enter the Meeting Image"
        />
        <input
          type="text"
          ref={linkInput}
          placeholder="Enter the Meeting Link"
        />
        <input
          type="datetime-local"
          ref={dateInput}
          placeholder="Enter the Meeting Date"
        />
                <button className="add-btn" onClick={addMeetingHandler}> <div className={loader == true ? "d-none": ""}>Add New Meeting</div> <div className={loader == true ? "": "d-none"}>Adding  Meeting</div> <div className={loader == true ? "loader": ""}></div></button>
        
      </div>
    </div>
  );
};

export default AddMeeting;
