import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MDBIcon } from "mdbreact";
import "./navbar.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span><MDBIcon icon="bars" size="2x" /></span>
            </button>
            <div className="navbar-brand">
                <MDBIcon icon="circle" className="red-text pr-3" />
                <MDBIcon icon="circle" className="amber-text pr-3" />
                <MDBIcon icon="circle" className="green-text pr-3" />
            </div>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Home
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
            </Link>
                    </li>
                    {/* ------ */}
                    <li className="nav-item">
                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://github.com/MikelTafalla"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mikel-rodriguez-villar/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link active" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11QkzKWSPEZ5q3N-XW5pd7j_bkxVU2yW6/view?usp=sharing"><MDBIcon icon="award" /></a>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;