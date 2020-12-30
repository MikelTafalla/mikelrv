import React from "react";
import { Link } from "react-router-dom";
import "./about.css"
import Navbar from "./navbar"

const AboutIntro = () => {
    return (
        <React.Fragment>
            <div></div>
            
            <div className="intro">
                <Navbar />
                <div className="card text-center introcard">
                    <div className="card-header">
                        Mikel Rodriguez
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Full-Stack Web Developer</h5>
                        <p className="card-text">I am a Full-Stack Web Developer/ Software Engineer and a Spanish Linguist with an MA in Iberian Linguistics from the University of California Santa Barbara. I specialize in frontend and backend development for complex scalable web apps. I hope to join a learning-oriented company where I can promote growth as well as expand my own knowledge of programming. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                        <Link to="/portfolio" className="btn btn-light">My Work</Link>
                        <a href="https://drive.google.com/file/d/1FXT9ZzMn6tvFQcJbAZbvFK_7vAgi1Cir/view" className="btn btn-dark" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
                {/* point added for css purposes */}
                <div className="point">.</div>
            </div>
            
        </React.Fragment>
    );
};

export default AboutIntro;