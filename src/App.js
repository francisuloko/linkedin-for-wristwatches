import "./App.css";
import Nav from "./components/nav";
import Clock from "./components/Clock"

function App() {
  return (
    <div className="app vh-100 d-flex flex-column gap-2 justify-content-center align-items-center">
      <div className="clock-face d-flex flex-column justify-content-around align-items-center">
      <spa className="logo">LinkedIn <i class="bi bi-linkedin text-primary"></i></spa>
      <Nav />
      <Clock />
    </div>
    </div>
  );
}

export default App;
