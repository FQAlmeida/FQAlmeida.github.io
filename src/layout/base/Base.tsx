// Global Imports
import React, { Component } from "react"

// Local Imports
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

// Styles
import "./sass/base.sass"

class Base extends Component {
    render() {
        return (
            <div className="base">
                <Navbar />
                <div className="base__content">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Base;
