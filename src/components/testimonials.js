import React from "react";
import Testimonials from "./testimonials.json";
import "./testimonials.css";

const Reviews = () => {
    return (
        <React.Fragment>
            <section className="section-medium section-arrow--bottom-center section-arrow-primary-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-white text-center">
                            <h1 className=" font-weight-light section-title"> What Others Say About Me</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-primary t-bordered">
                <div className="container">
                    <div className="row testimonial-three testimonial-three--col-three">

                    {Testimonials.map(testimonial => (
                        <div className="col-md-4 testimonial-three-col">
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemprop="image">
                                    <img width="180" height="180" src={require(`../assets/images/testimonial/${testimonial.photo}`).default} alt="" />
                                </div>
                                <div className="testimonial-content">
                                <p className="text">{testimonial.message}</p>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name" itemprop="name">{testimonial.name}</strong>
                                    <span className="testimonial-job-title" itemprop="jobTitle">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Reviews;