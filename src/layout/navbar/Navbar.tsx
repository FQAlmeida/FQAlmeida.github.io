// Global Imports
import React, { Component } from "react"
import { Link } from "react-router-dom"
// Local Imports

// Styles
import "./sass/navbar.sass"

class Navbar extends Component {
    render() {
        return (
            <header>
                <Link to="/">
                    Home
                </Link>
            </header>
        )
    }
}

export default Navbar;
