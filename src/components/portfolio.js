import React, { useState } from "react";
import Navbar from "./navbar";
import "./portfolio.css"
import Projects from "./projects.json"


const Portfolio = () => {
    const [shown, setShown] = useState(false);
    const [name, setName] = useState("")
   
    // const handleMouseOver = (event) => {
    //     setName(event.target.alt);
    //     console.log(name)
    //   };
    return (
        <React.Fragment>
            <section className="wrap">
                < Navbar />
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">My Work</h1>

                    <div className="mt-2 mb-5">

                        <div className="row text-center text-lg-left">
                            {Projects.map(project => (
                                <div className="col-lg-4 col-md-6 col-sm-6 zoom" key={project.name} data-info={project.name}>

                                        {shown && name === project.name ?
                                            <img className="img-fluid img-thumbnail" src={require(`../assets/giphy/${project.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={project.name} />
                                            :
                                            <img className="img-fluid img-thumbnail" src={require(`../assets/projects/${project.path}`).default} alt={project.name} onMouseEnter={() => {setShown(true); setName(project.name)}}
                                            />
                                        }

                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;

