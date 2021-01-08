import React from "react";
import { MDBIcon } from "mdbreact";
import "./caseStudy.css";


const CaseStudy = (props) => {
    return (
        <React.Fragment>
        
            <div className="container-fluid bg-light text-center title">

                <h2>Case Study:{props.title}</h2>
                <p>
                {props.subtitle}
                </p>
            </div>
            <div className="card">
                <h3 className="card-header">{props.summary_header}</h3>
                <div className="card-body">
                <div><MDBIcon icon="industry" className="icon" />{props.industry}</div>
                <div><MDBIcon icon="users" className="icon" />{props.size}</div>
                <div><MDBIcon icon="link" className="icon" /><a href={props.url} target="_blank" rel="noopener noreferrer">{props.summary_header}</a></div>
                <div><MDBIcon icon="link" className="icon" /><a href={props.github} target="_blank" rel="noopener noreferrer">{props.code}</a></div>
                <div>{props.notes}</div>
                    <h5 className="card-title requirements">Project Requirements</h5>
                        {props.requirements}
                    <h5 className="card-title">Technologies Used</h5>
                        {props.technologies}
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h3>Project Overview</h3>
                </div>
                <div className="card-body">
                    <p>
                    {props.overview}
                    </p>    
                </div>
                <div className="card-header">
                    <h3>Approach and Solution</h3>
                </div>
                <div className="card-body">
                    <p>
                    {props.approach}
                    </p>    
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h4><MDBIcon icon="quote-left" className="icon" />Testimonial</h4>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>
                        {props.testimonial}
                        </p>
                    </blockquote>
                    <div className="source-holder">
                        <div className="profile">
                            <img src={require(`../assets/images/testimonial/${props.photo}`).default} alt="Nancy_Pena" />
                        </div>
                        <div className="meta">
                            <div className="name">{props.testimonial_name}</div>
                            <div className="info">{props.testimonial_role}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}
export default CaseStudy;