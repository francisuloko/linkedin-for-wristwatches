import "./App.css";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Clock from "./components/Clock";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Inbox from "./components/Inbox";
import Message from "./components/Message";
import Network from "./components/Network";
import Notifications from "./components/Notification";

function App() {
  let navigate = useNavigate();
  const screenName = window.location.pathname;

  return (
    <div className="app vh-100 d-flex flex-column gap-2 justify-content-center align-items-center">
      <div className="clock-face d-flex flex-column justify-content-around align-items-center position-relative">
        <Link to="/" className="logo mt-3">
          LinkedIn <i className="bi bi-linkedin text-primary"></i>
        </Link>
        <div id="main">
          <Routes>
            <Route path="/" exact element={<Nav />} />
            <Route path="/feed" exact element={<Feed />} />
            <Route path="/feed/:id" exact element={<Post />} />
            <Route path="/inbox" exact element={<Inbox />} />
            <Route path="/inbox/:id" exact element={<Message />} />
            <Route path="/network" exact element={<Network />} />
            <Route path="/notification" exact element={<Notifications />} />
          </Routes>
        </div>
        {screenName === "/" ? (
          <Clock />
        ) : (
          <button
            className="back bg-transparent fs-5 border-0 m-0 p-0"
            onClick={() => navigate(-1)}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
