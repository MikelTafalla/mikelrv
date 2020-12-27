import React, { useState } from "react";
import Typist from "react-typist";
import "./landing.css"


const Fluid = () => {

    const [renderMsg, setRenderMsg] = useState({ state: false })

    const onHeaderTyped = () => {
        setRenderMsg({ state: true });
    }
    return (
        <React.Fragment>
            <div className="text-center">
                <img src={require("../assets/images/MikelColumn.png").default} className="rounded" alt="mikel's photo" />
            </div>

            <div className="Typist">
                <Typist
                    className="Typist-header"
                    avgTypingDelay={50}
                    startDelay={2000}
                    onTypingDone={() => onHeaderTyped()}
                >
                    <a href={""}>Hi!!</a>
                </Typist>
                <div className="Typist-content">
                    {renderMsg.state ? (
                        <Typist
                            className="Typist-message"
                            avgTypingDelay={50}
                            cursor={{ hideWhenDone: true }}
                        >
                            * My name is Mikel Rodriguez. I'm a Full-Stack Developer and Spanish Linguist with a Master's degree in Iberian Linguistics. Welcome to my personal website!
                            
                            <Typist.Delay ms={1250} />
                            <br />
                            <span>* <a href={""} className="flash">docs</a></span>
                            <br />
                            {''}
                        </Typist>
                    ) : null}
                </div>
            </div>
        </React.Fragment>
    )

}

export default Fluid;

