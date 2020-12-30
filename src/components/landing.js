import React from "react";
import Typist from "react-typist";
import "./landing.css";
import Navbar from "./navbar"
import { Link } from "react-router-dom"


const ShellTerminal = () => {

    return (
        <React.Fragment >
            <div className="wrapper">
                
                <div className="text-center" >
                    <img src={require("../assets/images/MikelColumn.png").default} className="rounded" alt="mikel" />
                </div>
                <div className="Typist bash"> 
                <Navbar />
                    $Welcome to mikelrv's Shell! (V1.0.0)
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
                                <span>$ <Link to="/about" className="flash">About Me</Link></span>
                                <br />

                                <Typist.Delay ms={250} />
                                <br />
                                <span>$ <a href={"https://drive.google.com/file/d/1FXT9ZzMn6tvFQcJbAZbvFK_7vAgi1Cir/view"} className="flash" target="_blank" rel="noopener noreferrer">Resume</a></span>
                                <br />

                                
                            </Typist>
                        
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>
    )

}

export default ShellTerminal;

