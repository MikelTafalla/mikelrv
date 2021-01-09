import React from "react";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactPage = () => {

    return (
        <React.Fragment>
            <Navbar/>
            <Contact />
            <Footer />
        </React.Fragment>
    )
}

export default ContactPage;