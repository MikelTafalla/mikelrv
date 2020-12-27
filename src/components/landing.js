import React, {useState} from "react";
import Typist from "react-typist";
import "./landing.css"


const Fluid = () => {

    const [renderMsg, setRenderMsg] = useState({state: false})
    
    const onHeaderTyped = () => {
        setRenderMsg({state: true});
    }
    return (
        <React.Fragment>

<div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={() => onHeaderTyped()}
        >
        <a href={""}>Welcome to my Portfolio</a>
        </Typist>
        <div className="TypistExample-content">
          {renderMsg.state ? (
            <Typist
              className="TypistExample-message"
              cursor={{ hideWhenDone: true }}
            >
              * Easy to style
              <Typist.Delay ms={1250} />
              <br />
              * Easy to customize
              <Typist.Delay ms={1250} />
              <br />
              * Easy to use backp<Typist.Delay ms={500} />sace
              <Typist.Backspace count={5} delay={1000} />
              <Typist.Delay ms={750} />
              space
              <Typist.Delay ms={1250} />
              <br />
              <span>* <a className="flash">docs</a></span>
              <br />
              {''}
            </Typist>
          ) : null }
        </div>
      </div>
        </React.Fragment>
    )

}

export default Fluid;

