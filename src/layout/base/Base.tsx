// Global Imports
import React, { Component, Fragment } from "react"

// Local Imports
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

// Styles
import "./sass/base.sass"

class Base extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}

export default Base;
