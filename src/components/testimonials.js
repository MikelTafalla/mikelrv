import React, {useState} from "react";
import Testimonials from "./testimonials.json";
import "./testimonials.css";

const Reviews = (props) => {
    const [readMore, setReadMore] = useState(false);
    const [name, setName] = useState("");

    return (
        <React.Fragment>
            <section className="section-medium section-arrow--bottom-center section-arrow-primary-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-white text-center">
                            <h1 className=" font-weight-light section-title"> {props.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-primary t-bordered">
                <div className="container">
                    <div className="row testimonial-three testimonial-three--col-three">

                    {Testimonials.map(testimonial => (
                        <div className="col-lg-4 col-md-6 col-sm-12 testimonial-three-col" key={testimonial.client}>
                            <div className="testimonial-inner">
                                <div className="testimonial-image" itemProp="image">
                                    <img width="180" height="180" src={require(`../assets/images/testimonial/${testimonial.photo}`).default} alt={testimonial.name} />
                                </div>
                                <div className="testimonial-content">
                                <p className="text">{readMore && name === testimonial.client ? testimonial.extracontent : testimonial.message}</p><button className="styleBtn" onClick={(event)=>{setName(event.target.id);setReadMore(!readMore)}}><p id={testimonial.client}>{readMore && name === testimonial.client ? "Read Less <<" : "Read More >>"}</p></button>
                                </div>
                                <div className="testimonial-meta">
                                    <strong className="testimonial-name" itemProp="name">{testimonial.name}</strong>
                                    <span className="testimonial-job-title" itemProp="jobTitle">{testimonial.role}<a href={testimonial.url} target="_blank" rel="noreferrer">{testimonial.company}</a></span>
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