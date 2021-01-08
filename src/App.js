import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LandingPG from "./pages/landingPg";
import AboutPG from "./pages/aboutPg";
import PortfolioPG from "./pages/portfolioPg";
import CaseStudyPG from "./pages/caseStudyPg";

function App() {
  
  return (
    <Router>
    <div>
        <Route exact path="/" component={LandingPG} />
        <Route exact path="/home" component={LandingPG} />
        <Route exact path="/portfolio" component={PortfolioPG}/>
        <Route exact path="/about" component={AboutPG} />
        <Route exact path="/case_study" component={CaseStudyPG} />
        {/* <Route exact path="/contact" component={Contact} />  */}
      {/* <Footer /> */}
    </div>
   
  </Router>
  );
}

export default App;
