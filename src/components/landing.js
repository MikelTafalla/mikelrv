import React from "react";
import Typist from "react-typist";
import "./landing.css";
import Navbar from "./navbar"


const ShellTerminal = () => {

    return (
        <React.Fragment>

            <div className="text-center">
                <img src={require("../assets/images/MikelColumn.png").default} className="rounded" alt="mikel" />
            </div>
            <div className="Typist bash"> 
            <Navbar />
                $Welcome to mikelrv's Shell! (V1.0.0)
                <br></br>
                <br></br>
                <br></br>
                
                <div className="Typist-content">
                    
                        <Typist
                            className="Typist-message"
                            startDelay={1500}
                            avgTypingDelay={40}
                            cursor={{ hideWhenDone: true }}
                        >
                            $ My name is Mikel Rodriguez. I'm a Full-Stack Developer and Spanish Linguist with a Master's degree in Iberian Linguistics. Welcome to my personal website!
                            
                            <Typist.Delay ms={250} />
                            <br />
                            <span>$ <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"} className="flash">My Work</a></span>
                            <br />

                            <Typist.Delay ms={250} />
                            <br />
                            <span>$ <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"} className="flash">About me</a></span>
                            <br />

                            <Typist.Delay ms={250} />
                            <br />
                            <span>$ <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"} className="flash">Resume</a></span>
                            <br />


                            
                        </Typist>
                    
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )

}

export default ShellTerminal;

