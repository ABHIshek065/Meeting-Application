import "../assests/css/App.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddMeeting from "../pages/AddMeeting";
import UpcommingMeeting from "../pages/UpcommingMeeting";
import NotFound from "../pages/NotFound";
import PastMeeting from "../pages/PastMeeting";

function App() {
  return (
    <div className="Ap">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMeetings" element={<AddMeeting />} />
        <Route path="/UpcommingMeetings" element={<UpcommingMeeting />} />
        <Route path="/PastMeeting" element={<PastMeeting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
