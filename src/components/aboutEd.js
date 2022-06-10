import React from "react";
import "./about.css";
import { MDBIcon } from "mdbreact";

const AboutEd = () => {
    return (
        <React.Fragment>

            <div className="education">

                <div className="card education">
                    <h5 className="card-title text-center techHeader">Profesional Experience & Education</h5>

                    <div className="card-body">
                        <br></br>
                        <div className="card-text">

                            <div className="row">

                                <div className="col-md-4 ">
                                    <div className="clearfix content-heading edBinary">
                                        <img className="pull-left edHead" src={require("../assets/images/edHead.png").default} alt="edHead.png" />
                                    </div>
                                </div>

                                <div className="col-md-8">

                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                            <tr className="table-headers">
                                                <th scope="col">Company</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Dates</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-rows">
                                                <td>
                                                    Extensive <br></br>
                                                        <a href="https://www.cartrover.com/" target="_blank" rel="noreferrer noopener">
                                                            (CartRover product)<MDBIcon className="externalLink" icon="external-link-alt" size="1%"/>
                                                        </a>
                                                </td>
                                                <td>
                                                    <ul className="bullet_rows_ed_tech">
                                                        <li>Software Engineer <span className="date_row_tech_ed">(05/2022 - Present)</span></li>
                                                        <li>Software Developer Level 1 <span className="date_row_tech_ed">(05/2021 - 05/2022)</span></li>
                                                    </ul>
                                                </td>
                                                <td>05/2021 - Present</td>
                                            </tr>
                                            <tr className="table-rows">
                                                <td>
                                                    Freelance:
                                                    <ul>
                                                        <li>CleanSafe Maintenance</li>
                                                        <li>HospiceMD</li>
                                                        <li>VeiraMal Consulting</li>
                                                    </ul>
                                                </td>
                                                <td>Full-Stack Developer</td>
                                                <td>04/2020 - 10/2020</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <ul>
                                                        <li>University of California, Santa Barbara</li>
                                                        <li>SigloXXI Spanish Academy</li>
                                                        <li>Defense Language Institute</li>
                                                    </ul>
                                                </td>
                                                <td>Spanish & Literature Professor</td>
                                                <td>09/2014 - 07/2020</td>
                                            </tr>
                                            <tr className="table-rows">
                                                <td>BioSB, Inc</td>
                                                <td>Customer Service and Sales</td>
                                                <td>10/2017 - 07/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Immigrant Legal Defense Center</td>
                                                <td>Volunteer Translator and Interpreter</td>
                                                <td>06/2019 - Present</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="table table-striped">
                                        <thead className="thead-dark">
                                            <tr className="table-headers">
                                                <th scope="col">Institution</th>
                                                <th scope="col">Field</th>
                                                <th scope="col">Degree</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-rows">
                                                <td>University of California, Los Angeles</td>
                                                <td>Full-Stack MERN Web Development</td>
                                                <td>Bootcamp</td>
                                            </tr>
                                            <tr>
                                                <td>University of California, Santa Barbara</td>
                                                <td>Iberian Linguistics</td>
                                                <td>Master</td>
                                            </tr>
                                            <tr className="table-rows">
                                                <td>University of Deusto, Bilbao (Spain)</td>
                                                <td>Modern Languages</td>
                                                <td>Bacherlor</td>
                                            </tr>
                                            <tr>
                                                <td>University of St. Andrews (Scotland)</td>
                                                <td>English and Latin American History and Literature</td>
                                                <td>Erasmus Program B.A.</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>

                            </div> {/* Ends Row div */}
                        </div>
                    </div>
                    
                    
                    <a href="https://drive.google.com/file/d/1FXT9ZzMn6tvFQcJbAZbvFK_7vAgi1Cir/view" target="_blank" rel="noopener noreferrer"><MDBIcon className="download" icon="arrow-circle-down" size="3x"/></a>
                    <label className="downloadText">Download Resume</label>
 
                </div>
            </div> {/* End Education div*/}


        </React.Fragment>
    );
};

export default AboutEd;