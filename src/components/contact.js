import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <React.Fragment>
            <div className="main-wrapper">
                <section className="cta-section theme-bg-light py-5">
                    <div className="container text-center single-col-max-width">
                        <h2 className="heading">Contact</h2>
                            <div className="">
                            <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to</p> 
                                <p><a href="mailto:mikel362d@gmail.com" rel="noreferrer"> mikel362d@gmail.com</a>
                            </p>
                            </div>
                        <p>Want to get connected? Follow me on the social channels below.</p>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mb-3"><a className="linkedin" href="https://www.linkedin.com/in/mikel-rodriguez-villar/"  target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
                                <li className="list-inline-item mb-3"><a className="github" href="https://github.com/MikelTafalla?tab=repositories" target="_blank" rel="noreferrer"><i className="fab fa-github-alt fa-fw fa-lg"></i></a></li>  
                            </ul>
                        
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
};

export default Contact;