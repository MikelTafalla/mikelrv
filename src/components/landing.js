import React, { useState } from "react";
import Typist from "react-typist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MDBIcon } from "mdbreact";
import "./landing.css"


const Fluid = () => {

    const [renderMsg, setRenderMsg] = useState({ state: false })

    const onHeaderTyped = () => {
        setRenderMsg({ state: true });
    }
    return (
        <React.Fragment>
            <div className="text-center">
                <img src={require("../assets/images/MikelColumn.png").default} className="rounded" alt="mikel" />
                <ul className="social-list list-inline py-2 mx-auto">
                    <li className="list-inline-item">
                        <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href={"https://github.com/MikelTafalla"} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href={"https://drive.google.com/file/d/11QkzKWSPEZ5q3N-XW5pd7j_bkxVU2yW6/view?usp=sharing"} target="_blank" rel="noreferrer">
                            <MDBIcon icon="award" />
                        </a>
                    </li>
            </ul>
                
            </div>
            <div className="Typist bash"> $Welcome to mikelrv Shell! (V1.0.0)
                <Typist
                    className="Typist-header"
                    avgTypingDelay={50}
                    startDelay={250}
                    onTypingDone={() => onHeaderTyped()}
                    cursor={{ hideWhenDone: true }}
                >
                    <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"}>Hi!!</a>
                </Typist>
                <div className="Typist-content">
                    {renderMsg.state ? (
                        <Typist
                            className="Typist-message"
                            avgTypingDelay={50}
                            cursor={{ hideWhenDone: true }}
                        >
                            $ My name is Mikel Rodriguez. I'm a Full-Stack Developer and Spanish Linguist with a Master's degree in Iberian Linguistics. Welcome to my personal website!
                            
                            <Typist.Delay ms={250} />
                            <br />
                            <span>$ <a href={"https://www.linkedin.com/in/mikel-rodriguez-villar/"} className="flash">My Work</a></span>
                            <br />
                            {''}
                        </Typist>
                    ) : null}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )

}

export default Fluid;

