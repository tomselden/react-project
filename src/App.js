import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./App.css";
import AboutMe from "./component/AboutMe";
import Home from "./component/Home";
import LandScape from "./component/Landscape";
import Github from "./component/Github";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar.Brand style={{fontWeight: "bolder", fontSize: "larger"}}>Thomas Selden's Portfolio</Navbar.Brand>
          <div className="Navbar">
            <ul style={{listStyleType: "none"}}>
            <li>
                <Link to="/Home">Home!</Link>
              </li>
              <li>
                <Link to="/AboutMe">About Me!</Link>
              </li>
              <li>
                <Link to="/GreatBand ">My Fav Band!</Link>
              </li>
              <li>
                <Link to="/Landscape ">Let's see the background picture!</Link>
              </li>
            </ul>
          </div>
        </Container>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/GreatBand" element={<Github />} />
          <Route path="/Landscape" element={<LandScape />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
