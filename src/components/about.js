import React from "react";
import { Link } from "react-router-dom";
import "./about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJsSquare, faNodeJs, faReact, faNpm, faBootstrap, faKorvue } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar"

const About = () => {
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

            <div>

                <div className="card text-center tech">

                    <div className="card-body">
                        <h5 className="card-title">Technologies Known</h5>
                        <br></br>
                        <div className="card-text">
                            <div className="row">
                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faHtml5} style={{ color: "orangered", fontSize: 30 + "px" }} /><FontAwesomeIcon icon={faCss3} style={{ color: "lightskyblue", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">HTML &amp; CSS</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faJsSquare} style={{ color: "rgb(218, 203, 36)", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">Vanilla JavaScript</h5>
                                        <div className="item-desc">knowledge of ES5 and ES6+</div>
                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}
                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><img className=" mr-2" src={require("../assets/icons/jquery2.png").default} alt="jQuery" /></div>
                                        <h5 className="item-title">jQuery</h5>
                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faNodeJs} style={{ color: "green", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">Node.js</h5>
                                        <div className="item-desc">Experience with Express.js</div>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faReact} style={{ color: "skyblue", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">React.js</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faNpm} style={{ color: "red", fontSize: 38 + "px" }} /></div>
                                        <h5 className="item-title">npm</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faBootstrap} style={{ color: "rgb(131, 64, 131)", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">Bootstrap</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faKorvue} style={{ color: "purple", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">Heroku</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><FontAwesomeIcon icon={faLeaf} style={{ color: "green", fontSize: 30 + "px" }} /></div>
                                        <h5 className="item-title">MongoDB</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><img className=" mr-2" src={require("../assets/icons/MySQL.png").default} alt="MySql" /></div>
                                        <h5 className="item-title">MySQL</h5>
                                        <div className="item-desc">Experience with sequelize ORM</div>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><img className="mr-5" src={require("../assets/icons/mustache.png").default} alt="mustache" style={{ width: 35 + "px" }} /></div>
                                        <h5 className="item-title">Handlebars</h5>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                                {/*//item*/}

                                <div className="item col-6 col-lg-3 with-margin">
                                    <div className="item-inner">
                                        <div className="item-icon"><img className="mr-5" src={require("../assets/icons/python.ico").default} alt="python" /></div>
                                        <h5 className="item-title">Python</h5>
                                        <div className="item-desc">Currently self-learning</div>

                                    </div>
                                    {/*//item-inner*/}
                                </div>
                            </div>
                            {/*//row*/}

                        </div>
                    </div>
                </div>
            </div>

            <div className="education">

                <div className="card text-center education">
                    <h5 className="card-title">Profesional Experience & Education</h5>

                    <div className="card-body">
                        <br></br>
                        <div className="card-text">
                            {/* <div className="paragraphs"> */}
                                <div className="row">

                                    <div class="col-md-4">
                                        <div className="clearfix content-heading">
                                            <img className="pull-left edHead" src={require("../assets/images/edHead.png").default} alt="edHead.png" />
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <p>Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                                    </div>
                                </div>
                                {/* </div> */}

                            {/* </div> */}
                            {/*//row*/}

                        </div>
                    </div>
                </div>
            
            </div>
        </React.Fragment>
    );
};

export default About;