import React from "react";
import Navbar from "./navbar";
import "./portfolio.css"


const Portfolio = () => {
    return (
        <React.Fragment>
            <section className="wrap">
                < Navbar />
                <div className="container">

                    <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">My Work</h1>

                    <div className="mt-2 mb-5">

                        <div className="row text-center text-lg-left">

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="#" className="d-block mb-4 h-100">
                                    <img className="img-fluid img-thumbnail" src={require("../assets/projects/cleansafe1.png").default} alt="" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="#" className="d-block mb-4 h-100">
                                    <img className="img-fluid img-thumbnail" src={require("../assets/projects/ub04.jpg").default} alt="" />
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <a href="#" className="d-block mb-4 h-100">
                                    <img className="img-fluid img-thumbnail" src={require("../assets/projects/veiramal.jpg").default} alt="" />
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Portfolio;

