import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Navbar from "./components/navbar"
import LandingPG from "./pages/landingPg";

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar /> */}
        <Route exact path="/" component={LandingPG} />
        <Route exact path="/home" component={LandingPG} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />  */}
      {/* <Footer /> */}
    </div>
   
  </Router>
  );
}

export default App;
