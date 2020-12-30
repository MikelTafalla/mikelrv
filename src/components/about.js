import React from "react";
import Technologies from "./aboutTech"
import Intro from "./aboutIntro"
import Education from "./aboutEd"

const About = () => {
    return (
        <React.Fragment>
            <Intro />
            <Technologies />
            <Education />
        </React.Fragment>
    );
};

export default About;