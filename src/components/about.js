import React from "react";
import Technologies from "./aboutTech";
import Intro from "./aboutIntro";
import Education from "./aboutEd";
import Testimonials from "./testimonials";


const About = () => {
    return (
        <React.Fragment>
            <Intro />
            <Technologies />
            <Education />
            <Testimonials title="Testimonials"/>
        </React.Fragment>
    );
};

export default About;