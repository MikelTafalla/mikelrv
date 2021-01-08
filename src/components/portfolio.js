import React, { useState } from "react";
import Navbar from "./navbar";
import "./portfolio.css";
import Projects from "./projects.json";
import Practice from  "./practice.json";
import Testimonials from "./testimonials";
import { Link } from "react-router-dom";


const Portfolio = () => {
    const [shown, setShown] = useState(false);
    const [name, setName] = useState("");
    const [projectType, setProjectType] = useState("");
   
    const handleClick = (event) => {
        setProjectType(event.target.value);
      };
    // Creates gallery through conditional rendering
    let gallery;
    if (projectType === "" || projectType === "client") {
        gallery =
        <div className="row text-center text-lg-left">
            {Projects.map(project => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={project.name} data-info={project.name}>

                    {shown && name === project.name ?
                        <img className="img-fluid img-thumbnail zoom buttons" src={require(`../assets/giphy/${project.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={project.name} />
                        :
                        <img className="img-fluid img-thumbnail zoom" src={require(`../assets/projects/${project.path}`).default} alt={project.name} onMouseEnter={() => {setShown(true); setName(project.name)}}
                        />
                    }
                    <Link to="/case_study"><button className="btn btn-light btn-lg btn-block" value={project.name} onClick={(event)=> localStorage.setItem("caseStudy", JSON.stringify(event.target.value))} >
                    <p>Client: {project.name}</p>
                    View Case Study</button></Link>

                </div>
            ))}

        </div>
    } else if (projectType === "frontend"){
        gallery =
        <div className="row text-center text-lg-left">
            {Projects.filter(project => project.type.includes("frontend")).map(display => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={display.name} data-info={display.name}>

                    {shown && name === display.name ?
                        <img className="img-fluid img-thumbnail zoom buttons" src={require(`../assets/giphy/${display.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={display.name} />
                        :
                        <img className="img-fluid img-thumbnail zoom" src={require(`../assets/projects/${display.path}`).default} alt={display.name} onMouseEnter={() => {setShown(true); setName(display.name)}}
                        />
                    }
                    <Link to="/case_study"><button className="btn btn-light btn-lg btn-block" value={display.name} onClick={(event)=> localStorage.setItem("caseStudy", JSON.stringify(event.target.value))}>
                    <p>Client: {display.name}</p>
                    View Case Study</button></Link>

                </div>
            ))}

        </div>
    } else if (projectType === "fs"){
        gallery =
        <div className="row text-center text-lg-left">
            {Projects.filter(project => project.type.includes("fs")).map(display => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={display.name} data-info={display.name}>

                    {shown && name === display.name ?
                        <img className="img-fluid img-thumbnail zoom buttons" src={require(`../assets/giphy/${display.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={display.name} />
                        :
                        <img className="img-fluid img-thumbnail zoom" src={require(`../assets/projects/${display.path}`).default} alt={display.name} onMouseEnter={() => {setShown(true); setName(display.name)}}
                        />
                    }
                    <Link to="/case_study">
                    <button className="btn btn-light btn-lg btn-block" value={display.name} onClick={(event)=> localStorage.setItem("caseStudy", JSON.stringify(event.target.value))}>
                    <p>Client: {display.name}</p>
                    View Case Study</button></Link>

                </div>
            ))}

        </div>
    } else if (projectType === "react"){
        gallery =
        <div className="row text-center text-lg-left">
            {Projects.filter(project => project.type.includes("react")).map(display => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={display.name} data-info={display.name}>

                    {shown && name === display.name ?
                        <img className="img-fluid img-thumbnail zoom buttons" src={require(`../assets/giphy/${display.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={display.name} />
                        :
                        <img className="img-fluid img-thumbnail zoom" src={require(`../assets/projects/${display.path}`).default} alt={display.name} onMouseEnter={() => {setShown(true); setName(display.name)}}
                        />
                    }
                    <Link to="/case_study">
                    <button className="btn btn-light btn-lg btn-block" value={display.name} onClick={(event)=> localStorage.setItem("caseStudy", JSON.stringify(event.target.value))}>
                    <p>Client: {display.name}</p>
                    View Case Study</button></Link>

                </div>
            ))}

        </div>
    } else if (projectType === "class") {
        gallery =
        <div className="row text-center text-lg-left">
            {Practice.map(project => (
                <div className="col-lg-4 col-md-6 col-sm-6 " key={project.name} data-info={project.name}>

                    {shown && name === project.name ?
                        <img className="img-fluid img-thumbnail zoom buttons" src={require(`../assets/giphy/practice/${project.gif}`).default} onMouseLeave={() => {setShown(false); setName("")}} alt={project.name} />
                        :
                        <img className="img-fluid img-thumbnail zoom" src={require(`../assets/practice/${project.path}`).default} alt={project.name} onMouseEnter={() => {setShown(true); setName(project.name)}}
                        />
                    }
                    
                    <button className="btn btn-light btn-lg btn-block" >
                    <p>Project: {project.name}</p>    
                    View Code</button>

                </div>
            ))}

        </div>
    }
    return (
        <React.Fragment>
            <section className="wrap">
                < Navbar />
                <div className="container text-center">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">My Work</h1>
                    <h6>**Hover over the images to showcase giphy or click if on a phone</h6>
                        {/* sets filters */}
                        <div className="btn-group btn-group-toggle flex-wrap" data-toggle="buttons" >
                            <button className="btn btn-primary active" onClick={handleClick} value="client" >
                                <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Real Clients
                            </button>
                            <button className="btn btn-primary" onClick={handleClick} value="frontend">
                                <input type="radio" name="options" id="option2" autoComplete="off" /> FrontEnd
                            </button>
                            <button className="btn btn-primary" onClick={handleClick} value="fs">
                                <input type="radio" name="options" id="option3" autoComplete="off" /> Full-Stack
                            </button>
                            <button className="btn btn-primary" onClick={handleClick} value="react">
                                <input type="radio" name="options" id="option4" autoComplete="off" /> React / Node
                            </button>
                            <button className="btn btn-primary" onClick={handleClick} value="class">
                                <input type="radio" name="options" id="option5" autoComplete="off" /> Class / Practice
                            </button>
                        </div>
                    <div className="mt-2 mb-5">

                        {gallery}

                    </div> 
                    
                </div>
            </section>
            <Testimonials title="What Others Say About Me"/>
        </React.Fragment>
    );
};

export default Portfolio;

